/******************************************************************************
Copyright (c) 2011, 2012, 2013 Jake Gordon and contributors
Copyright (c) 2013 Aaron Marasco
Based on https://github.com/jakesgordon/bin-packing/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE

******************************************************************************/
(function(exports) {


var Node = function(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.w = obj.w;
    this.h = obj.h;
    this.used = false;
    this.right = this.down = {
        findSpace: function() { return null; }
    };
};

Node.prototype = {
    getPosition: function() {
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h
        };
    },

    clone: function() {
        var ret = new Node({
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h
        });

        ret.right = this.right;
        ret.down = this.down;
        ret.used = this.used;
        return ret;
    },

    /**
     * Extend a node to the right, return the new sectioned empty space
     * 
     * @param  {Node} downNode Node existing empty space
     * @param  {Number} width Amount to grow right
     * @param  {Number} height Height of the block that's being fit
     * @return {Node} node containing new empty space that will fit the object
     */
    growRight: function(downNode, width, height) {
        this.right = new Node({
            x: this.w,
            y: this.y,
            w: width,
            h: this.h
        });

        this.w = this.w + width;
        this.down = downNode;
        return this.right;
    },

    /**
     * Grow a node down, return the new sectioned empty space
     * 
     * @param  {Number} rightNode Node containing exiting empty space
     * @param  {Number} width Width of the object we're adding
     * @param  {Number} height Height to grow
     * @return {Node} node containing new empty space that will fit the object
     */
    growDown: function(rightNode, width, height) {
        this.down = new Node({
            x: this.x,
            y: this.h,
            w: this.w,
            h: height
        });

        this.h = this.h + height;
        this.right = rightNode;
        return this.down;
    },

    findSpace: function(width, height) {

        if (this.used) {
            // used space -- look in tree for space
            return (this.right.findSpace(width, height)) || (this.down.findSpace(width, height));
        }

        // this is unused space, and fits
        if (this.w >= width && this.h >= height) {
            return this;
        }

        // empty space, but not big enough to fit the node
        return null;
    },

    use: function() {
        this.used = true;
        return this;
    },

    /*
     * Assuming a node is unused, at least (width) wide and (height) tall, get the free space from this node
     * and create empty blocks if there is left over space.
     */
    split: function(width, height) {
        // if there's empty space around this node, create new node from the space
        if (this.h > height) {
            this.down = new Node({
                 x: this.x,
                 // position = just below the used space
                 y: this.y + height,
                 w: this.w,
                 // height = remaining free height
                 h: this.h - height
            });
        }

        if (this.w > width) {
            this.right = new Node({
                // position = right of the empty space
                x: this.x + width,
                y: this.y,
                // width = remaining empty width
                w: this.w - width,
                h: height
            });
        }

        return this;
    }
};

var GrowingPacker = function(blocks) {
    if (blocks) {
        this.fit(blocks);
    }
};

GrowingPacker.prototype = {
    fit: function(blocks) {
        this.blocks = blocks.slice(0);
        var w = this.blocks[0].w;
        var h = this.blocks[0].h;
        this.root = new Node({
            w: w,
            h: h,
            x: 0,
            y: 0
        });

        this.blocks.forEach(function(block) {
            // find free space in the tree, or grow to accomodate
            var open = this.root.findSpace(block.w, block.h) || this.grow(block.w, block.h);
            // node = free space that will contain this block
            var node = open.split(block.w, block.h);
            node.use();
            block.fit = node.getPosition();
        }.bind(this));
    },

    grow: function(w, h) {
        // only grow down if the canvas is wide enough to support the object
        var canGrowDown = (w <= this.root.w);
        // only grow right if the canvas is tall enough to support the object
        var canGrowRight = (h <= this.root.h);

        // if taller than we are wide, grow right
        var shouldGrowRight = canGrowRight && (this.root.h > this.root.w);

        var oldRoot = this.root;
        this.root = oldRoot.clone();

        if (shouldGrowRight || !canGrowDown) {
            return this.root.growRight(oldRoot, w, h);
        }

        return this.root.growDown(oldRoot, w, h);
    }
};

exports.GrowingPacker = GrowingPacker;

})(window);