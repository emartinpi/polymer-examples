window.MyBehaviors = window.MyBehaviors || {};
MyBehaviors.HighlightBehavior = {
      properties: {
        isHighlighted: {
          type: Boolean,
          value: false,
          notify: true,
          observer: '_highlightChanged'
        }
      },

      listeners: {
        click: '_toggleHighlight'
      },

      created: function() {
        console.log('Highlighting for ', this, 'enabled!');
      },

      _toggleHighlight: function() {
        this.isHighlighted = !this.isHighlighted;
      },

      _highlightChanged: function(value) {
        this.toggleClass('highlighted', value);
      }
};