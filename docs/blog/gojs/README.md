## Scrolling Groups
go[v2.1.56]
```javascript
<!DOCTYPE html>
<html>
<head>
  <title>Scrolling Groups</title>
  <!-- Copyright 1998-2021 by Northwoods Software Corporation. -->
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body onload="init()">
  <div id="myDiagramDiv" style="border: solid 1px black; width:100%; height:500px; min-width: 200px"></div>

  <script src="https://gojs.net/latest/release/go.js"></script>
  <script src="../extensions/ScrollingTable.js"></script>  <!-- to define AutoRepeatButton -->

  <script id="code">
class ScrollingGroupLayout extends go.Layout {
  _topIndex = 0;
  _spacing = 10;
  _count = 0;
  _lastIndex = 0;

  cloneProtected(copy) {
    super.cloneProtected(copy);
    copy._topIndex = this._topIndex;
    copy._spacing = this._spacing;
  }

  get topIndex() { return this._topIndex; }
  set topIndex(val) {
    if (typeof val !== "number") throw new Error("new value for ScrollingGroupLayout.topIndex is not a number: " + val);
    if (this._topIndex !== val) {
      this._topIndex = val;
      this.invalidateLayout();
    }
  }

  get spacing() { return this._spacing; }
  set spacing(val) {
    if (typeof val !== "number") throw new Error("new value for ScrollingGroupLayout.spacing is not a number: " + val);
    if (this._spacing !== val) {
      this._spacing = val;
      this.invalidateLayout();
    }
  }

  get count() { return this._count; }

  get lastIndex() { return this._lastIndex; }

  doLayout(coll) {
    var diagram = this.diagram;
    var group = this.group;
    if (group === null) throw new Error("ScrollingGroupLayout must be a Group.layout, not a Diagram.layout");

    if (diagram !== null) diagram.startTransaction("Scrolling Group Layout");
    this.arrangementOrigin = this.initialOrigin(this.arrangementOrigin);
    var arr = [];
    // can't use Layout.collectParts here, because we're intentionally making some
    // member nodes not visible, which would normally prevent them from being laid out
    var it = group.memberParts.iterator;
    while (it.next()) {
      var part = it.value;
      if (part instanceof go.Link) continue;
      part.ensureBounds();
      arr.push(part);
    }
    this._count = arr.length;
    //?? ought to support custom sort ordering
    var x = this.arrangementOrigin.x;
    var y = this.arrangementOrigin.y;
    var maxy = y + group.resizeObject.height - group.placeholder.padding.bottom;
    var i = 0;
    var last = -1;
    while (i < arr.length && i < this.topIndex) {
      var part = arr[i++];
      part.visible = false;
      part.moveTo(x, y);
    }
    while (i < arr.length && y < maxy) {
      var part = arr[i++];
      part.moveTo(x, y);
      if (y + part.actualBounds.height < maxy) {
        part.visible = true;
        y += part.actualBounds.height + this.spacing;
        last = i - 1;
      } else {
        part.visible = false;
        break;
      }
    }
    while (i < arr.length) {
      var part = arr[i++];
      part.visible = false;
      part.moveTo(x, y);
    }
    this._lastIndex = last;
    var up = group.findObject("UP");
    if (up !== null) up.visible = this.lastIndex < this.count - 1;
    var down = group.findObject("DOWN");
    if (down !== null) down.visible = this.topIndex > 0;
    if (diagram !== null) diagram.commitTransaction("Scrolling Group Layout");
  }
}
// end of ScrollingGroupLayout


function init() {
  const $ = go.GraphObject.make;

  myDiagram =
    $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
      {
        "PartResized": e => {
          var part = e.subject.part;
          if (part instanceof go.Group && part.layout instanceof ScrollingGroupLayout) {
            part.layout.invalidateLayout();
          }
        }
      });

  myDiagram.nodeTemplate =
    $(go.Node, go.Panel.Auto,
      $(go.Shape, { fill: "white" },
        new go.Binding("fill", "color")),
      $(go.TextBlock, { margin: 4 },
        new go.Binding("text", "key")));

  myDiagram.groupTemplate =
    $(go.Group, "Vertical",
      {
        selectionObjectName: "SIZED",
        resizable: true, resizeObjectName: "SIZED",
        layout: $(ScrollingGroupLayout)
      },
      $(go.TextBlock, new go.Binding("text", "key")),
      $(go.Panel, "Auto",
        {
          name: "SIZED",
          desiredSize: new go.Size(NaN, 110),
          minSize: new go.Size(80, NaN)
        },
        $(go.Shape, { fill: "transparent", stroke: "blue", strokeWidth: 2 }),
        $(go.Placeholder, { padding: 10, alignment: go.Spot.TopLeft }),
        $("AutoRepeatButton",
          { name: "UP", alignment: go.Spot.TopRight },
          $(go.Shape, "TriangleUp", { width: 6, height: 6 }),
          {
            click: (e, button) => {
              var group = button.part;
              var lay = group.layout;
              if (lay.lastIndex < lay.count - 1) {
                lay.topIndex++;
              }
            }
          }),
        $("AutoRepeatButton",
          { name: "DOWN", alignment: go.Spot.BottomRight },
          $(go.Shape, "TriangleDown", { width: 6, height: 6 }),
          {
            click: (e, button) => {
              var group = button.part;
              var lay = group.layout;
              if (lay.topIndex > 0) {
                lay.topIndex--;
              }
            }
          })
      )
    );

  var model = new go.GraphLinksModel();
  model.nodeDataArray = [
    { key: "GROUP", isGroup: true },
    { key: "Alpha", color: "coral", group: "GROUP" },
    { key: "Beta", color: "tomato", group: "GROUP" },
    { key: "Gamma", color: "goldenrod", group: "GROUP" },
    { key: "Delta", color: "orange", group: "GROUP" },
    { key: "Epsilon", color: "coral", group: "GROUP" },
    { key: "Zeta", color: "tomato", group: "GROUP" },
    { key: "Eta", color: "goldenrod", group: "GROUP" },
    { key: "Theta", color: "orange", group: "GROUP" },
    { key: "Iota", color: "coral", group: "GROUP" },
    { key: "Kappa", color: "tomato", group: "GROUP" },
    { key: "Lambda", color: "goldenrod", group: "GROUP" },
    { key: "Mu", color: "orange", group: "GROUP" },
    { key: "Nu", color: "coral", group: "GROUP" },
    { key: "Xi", color: "tomato", group: "GROUP" },
    { key: "Omicron", color: "goldenrod", group: "GROUP" },
    { key: "Pi", color: "orange", group: "GROUP" },
    { key: "Rho", color: "coral", group: "GROUP" },
    { key: "Sigma", color: "tomato", group: "GROUP" },
    { key: "Tau", color: "goldenrod", group: "GROUP" },
    { key: "Upsilon", color: "orange", group: "GROUP" },
    { key: "Phi", color: "coral", group: "GROUP" },
    { key: "Chi", color: "tomato", group: "GROUP" },
    { key: "Psi", color: "goldenrod", group: "GROUP" },
    { key: "Omega", color: "orange", group: "GROUP" }
  ];
  myDiagram.model = model;
}
  </script>
</body>
</html>
```

ScrollingTable.js
```javascript
"use strict";
/*
*  Copyright (C) 1998-2021 by Northwoods Software Corporation. All Rights Reserved.
*/

// A "ScrollingTable" Panel

// This also defines an "AutoRepeatButton" Panel,
// which is used by the scrollbar in the "ScrollingTable" Panel.

// This defines a custom "Button" that automatically repeats its click
// action when the user holds down the mouse.
// The first optional argument may be a number indicating the number of milliseconds
// to wait between calls to the click function.  Default is 50.
// The second optional argument may be a number indicating the number of milliseconds
// to delay before starting calls to the click function.  Default is 500.

// Example:
//   $("AutoRepeatButton", 150,  // slower than the default 50 milliseconds between calls
//     {
//       click: function(e, button) { doSomething(button.part); }
//     },
//     $(go.Shape, "Circle", { width: 8, height: 8 })
//   )
go.GraphObject.defineBuilder("AutoRepeatButton", function(args) {
  var repeat = go.GraphObject.takeBuilderArgument(args, 50, function(x) { return typeof x === "number"; });
  var delay = go.GraphObject.takeBuilderArgument(args, 500, function(x) { return typeof x === "number"; });
  var $ = go.GraphObject.make;
  // some internal helper functions for auto-repeating
  function delayClicking(e, obj) {
    endClicking(e, obj);
    if (obj.click) {
      obj._timer =
        setTimeout(function() { repeatClicking(e, obj); },
                   delay);  // wait milliseconds before starting clicks
    }
  }
  function repeatClicking(e, obj) {
    if (obj._timer) clearTimeout(obj._timer);
    if (obj.click) {
      obj._timer =
        setTimeout(function() {
                     if (obj.click) {
                       (obj.click)(e, obj);
                       repeatClicking(e, obj);
                     }
                   },
                   repeat);  // milliseconds between clicks
    }
  }
  function endClicking(e, obj) {
    if (obj._timer) {
      clearTimeout(obj._timer);
      obj._timer = undefined;
    }
  }

  return $("Button",
           {
             actionDown: delayClicking, actionUp: endClicking,
             "ButtonBorder.figure": "Rectangle",
             "ButtonBorder.fill": null,
             "ButtonBorder.stroke": null,
             "_buttonFillOver": "rgba(0, 0, 0, .25)",
             "_buttonStrokeOver": null,
             cursor: "auto"
           });
});

// Create a scrolling Table Panel, whose name is given as the optional first argument.
// If not given the name defaults to "TABLE".
// Example use:
//   $("ScrollingTable", "TABLE",
//     new go.Binding("TABLE.itemArray", "someArrayProperty"),
//     ...)
// Note that if you have more than one of these in a Part,
// you'll want to make sure each one has a unique name.
go.GraphObject.defineBuilder("ScrollingTable", function(args) {
  var $ = go.GraphObject.make;
  var tablename = go.GraphObject.takeBuilderArgument(args, "TABLE");

  // an internal helper function for actually performing a scrolling operation
  function incrTableIndex(obj, i) {
    var diagram = obj.diagram;
    var table = obj.panel.panel.panel.findObject(tablename);
    if (i === +Infinity || i === -Infinity) {  // page up or down
      var tabh = table.actualBounds.height;
      var rowh = table.elt(table.topIndex).actualBounds.height;  // assume each row has same height?
      if (i === +Infinity) {
        i = Math.max(1, Math.ceil(tabh / rowh) - 1);
      } else {
        i = -Math.max(1, Math.ceil(tabh / rowh) - 1);
      }
    }
    var idx = table.topIndex + i;
    if (idx < 0) idx = 0;
    else if (idx >= table.rowCount - 1) idx = table.rowCount - 1;
    if (table.topIndex !== idx) {
      if (diagram !== null) diagram.startTransaction("scroll");
      table.topIndex = idx;
      var node = table.part;  // may need to reroute links if the table contains any ports
      if (node instanceof go.Node) node.invalidateConnectedLinks();
      updateScrollBar(table);
      if (diagram !== null) diagram.commitTransaction("scroll");
    }
  }

  function updateScrollBar(table) {
    var bar = table.panel.elt(1);  // the scrollbar is a sibling of the table
    if (!bar) return;
    var idx = table.topIndex;

    var up = bar.findObject("UP");
    if (up) up.opacity = (idx > 0) ? 1.0 : 0.3;

    var down = bar.findObject("DOWN");
    if (down) down.opacity = (idx < table.rowCount - 1) ? 1.0 : 0.3;

    var tabh = bar.actualBounds.height;
    var rowh = table.elt(idx).actualBounds.height;  //?? assume each row has same height?
    if (rowh === 0 && idx < table.rowCount-2) rowh = table.elt(idx + 1).actualBounds.height;
    var numVisibleRows = Math.max(1, Math.ceil(tabh / rowh) - 1);
    var needed = idx > 0 || idx + numVisibleRows <= table.rowCount;
    bar.opacity = needed ? 1.0 : 0.5;
  }

  return $(go.Panel, "Table",
      {
        _updateScrollBar: updateScrollBar
      },
      // this actually holds the item elements
      $(go.Panel, "Table",
        {
          name: tablename,
          column: 0,
          stretch: go.GraphObject.Fill,
          background: "whitesmoke",
          rowSizing: go.RowColumnDefinition.None,
          defaultAlignment: go.Spot.Top
        }),

      // this is the scrollbar
      $(go.RowColumnDefinition,
        { column: 1, sizing: go.RowColumnDefinition.None }),
      $(go.Panel, "Table",
        { column: 1, stretch: go.GraphObject.Vertical, background: "#DDDDDD" },
        // the scroll up button
        $("AutoRepeatButton",
          {
            name: "UP",
            row: 0,
            alignment: go.Spot.Top,
            click: function(e, obj) { incrTableIndex(obj, -1); }
          },
          $(go.Shape, "TriangleUp",
            { stroke: null, desiredSize: new go.Size(6, 6) })),
        // (someday implement a thumb here and support dragging to scroll)
        // the scroll down button
        $("AutoRepeatButton",
          {
            name: "DOWN",
            row: 2,
            alignment: go.Spot.Bottom,
            click: function(e, obj) { incrTableIndex(obj, +1); }
          },
          $(go.Shape, "TriangleDown",
            { stroke: null, desiredSize: new go.Size(6, 6) }))
      )
    );
});
```
[preview](https://gojs.net/extras/ScrollingGroup.html)
[来源](https://forum.nwoods.com/t/how-to-enable-a-vertical-scrollbar-inside-a-group-with-tree-layout/7879)

## use
```javascript
myDiagram.groupTemplateMap.add('groupTemplateNormal', groupTemplateNormal);
myDiagram.groupTemplateMap.add('groupTemplateScroll', groupTemplateScroll);

this.addNode({
  key: 'GroupKey',
  text: 'GroupText',
  isGroup: true,
  category: groupNodeCount > 6 ? 'groupTemplateScroll' : 'groupTemplateNormal',
});
```

