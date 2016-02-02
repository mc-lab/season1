var LineVerticalHand = (function () {
    function LineVerticalHand(parent) {
        this.parent = parent;
        this.flag_hand_show = false;
        this.line = this.parent.block.find(".line_vertical");
        this.hand = this.parent.block.find(".line_vertical .hand");
    }
    LineVerticalHand.MAX_HEIGHT = 2320;
    LineVerticalHand.prototype.scroll_area_move = function (area_y) {
        var y = area_y * 1.2;
        var h = LineVerticalHand.MAX_HEIGHT;
        if(h > y) {
            this.line.css("height", y);
            if(this.before_area_y && this.before_area_y < area_y) {
                if(!this.flag_hand_show) {
                    this.show();
                    this.flag_hand_show = true;
                }
            } else if(this.before_area_y && this.before_area_y > area_y) {
                if(this.flag_hand_show) {
                    this.hide();
                    this.flag_hand_show = false;
                }
            }
        } else {
            if(this.flag_hand_show) {
                this.hide();
                this.flag_hand_show = false;
            }
            this.line.css("height", h);
        }
        this.before_area_y = area_y;
    };
    LineVerticalHand.prototype.show = function () {
        this.hand.stop(true, true).fadeIn(300);
    };
    LineVerticalHand.prototype.hide = function () {
        this.hand.stop(true, true).fadeOut(300);
    };
    return LineVerticalHand;
})();
LineVerticalHand(".drawArea");

var LineHorizontalHand = (function () {
    function LineHorizontalHand(parent) {
        this.parent = parent;
        this.flag_hand_show = false;
        this.flag_line_end = false;
        this.line = this.parent.block.find(".line_horizontal");
        this.hand = this.parent.block.find(".line_horizontal .hand");
    }
    LineHorizontalHand.MAX_WIDTH = 1030;
    LineHorizontalHand.DELAY_LENGTH = 300;
    LineHorizontalHand.prototype.scroll_area_move = function (area_y) {
        var y = area_y * 1.2;
        var vh = LineVerticalHand.MAX_HEIGHT + LineHorizontalHand.DELAY_LENGTH;
        var h = vh + LineHorizontalHand.MAX_WIDTH;
        if(vh > y) {
            if(this.flag_hand_show) {
                this.hide();
                this.flag_hand_show = false;
            }
            this.line.css("width", 0);
        } else if(vh < y && y < h) {
            this.line.css("width", y - vh);
            if(this.before_area_y && this.before_area_y < area_y) {
                if(!this.flag_hand_show) {
                    this.show();
                    this.flag_hand_show = true;
                }
            } else if(this.before_area_y && this.before_area_y > area_y) {
                if(this.flag_hand_show) {
                    this.hide();
                    this.flag_hand_show = false;
                }
            }
        } else {
            if(this.flag_hand_show) {
                this.hide();
                this.flag_hand_show = false;
            }
            this.line.css("width", h - vh);
            if(!this.flag_line_end) {
                this.parent.dispatcher.dispatchEvent("LineHorizontalEnd");
                this.flag_line_end = true;
            }
        }
        this.before_area_y = area_y;
    };
    LineHorizontalHand.prototype.show = function () {
        this.hand.stop(true, true).fadeIn(300);
    };
    LineHorizontalHand.prototype.hide = function () {
        this.hand.stop(true, true).fadeOut(300);
    };
    return LineHorizontalHand;
})(); 