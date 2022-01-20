import{r as a,o as e,c as r,b as n,d as l,F as t,a as p,e as u}from"./app.8e53cc48.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const b={},i=p(`<h2 id="scrolling-groups" tabindex="-1"><a class="header-anchor" href="#scrolling-groups" aria-hidden="true">#</a> Scrolling Groups</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Scrolling Groups&lt;/title&gt;
  &lt;!-- Copyright 1998-2021 by Northwoods Software Corporation. --&gt;
  &lt;meta name=&quot;description&quot; content=&quot;&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
&lt;/head&gt;
&lt;body onload=&quot;init()&quot;&gt;
  &lt;div id=&quot;myDiagramDiv&quot; style=&quot;border: solid 1px black; width:100%; height:500px; min-width: 200px&quot;&gt;&lt;/div&gt;

  &lt;script src=&quot;../release/go.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;../extensions/ScrollingTable.js&quot;&gt;&lt;/script&gt;  &lt;!-- to define AutoRepeatButton --&gt;

  &lt;script id=&quot;code&quot;&gt;
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
    if (typeof val !== &quot;number&quot;) throw new Error(&quot;new value for ScrollingGroupLayout.topIndex is not a number: &quot; + val);
    if (this._topIndex !== val) {
      this._topIndex = val;
      this.invalidateLayout();
    }
  }

  get spacing() { return this._spacing; }
  set spacing(val) {
    if (typeof val !== &quot;number&quot;) throw new Error(&quot;new value for ScrollingGroupLayout.spacing is not a number: &quot; + val);
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
    if (group === null) throw new Error(&quot;ScrollingGroupLayout must be a Group.layout, not a Diagram.layout&quot;);

    if (diagram !== null) diagram.startTransaction(&quot;Scrolling Group Layout&quot;);
    this.arrangementOrigin = this.initialOrigin(this.arrangementOrigin);
    var arr = [];
    // can&#39;t use Layout.collectParts here, because we&#39;re intentionally making some
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
    while (i &lt; arr.length &amp;&amp; i &lt; this.topIndex) {
      var part = arr[i++];
      part.visible = false;
      part.moveTo(x, y);
    }
    while (i &lt; arr.length &amp;&amp; y &lt; maxy) {
      var part = arr[i++];
      part.moveTo(x, y);
      if (y + part.actualBounds.height &lt; maxy) {
        part.visible = true;
        y += part.actualBounds.height + this.spacing;
        last = i - 1;
      } else {
        part.visible = false;
        break;
      }
    }
    while (i &lt; arr.length) {
      var part = arr[i++];
      part.visible = false;
      part.moveTo(x, y);
    }
    this._lastIndex = last;
    var up = group.findObject(&quot;UP&quot;);
    if (up !== null) up.visible = this.lastIndex &lt; this.count - 1;
    var down = group.findObject(&quot;DOWN&quot;);
    if (down !== null) down.visible = this.topIndex &gt; 0;
    if (diagram !== null) diagram.commitTransaction(&quot;Scrolling Group Layout&quot;);
  }
}
// end of ScrollingGroupLayout


function init() {
  const $ = go.GraphObject.make;

  myDiagram =
    $(go.Diagram, &quot;myDiagramDiv&quot;,  // create a Diagram for the DIV HTML element
      {
        &quot;PartResized&quot;: e =&gt; {
          var part = e.subject.part;
          if (part instanceof go.Group &amp;&amp; part.layout instanceof ScrollingGroupLayout) {
            part.layout.invalidateLayout();
          }
        }
      });

  myDiagram.nodeTemplate =
    $(go.Node, go.Panel.Auto,
      $(go.Shape, { fill: &quot;white&quot; },
        new go.Binding(&quot;fill&quot;, &quot;color&quot;)),
      $(go.TextBlock, { margin: 4 },
        new go.Binding(&quot;text&quot;, &quot;key&quot;)));

  myDiagram.groupTemplate =
    $(go.Group, &quot;Vertical&quot;,
      {
        selectionObjectName: &quot;SIZED&quot;,
        resizable: true, resizeObjectName: &quot;SIZED&quot;,
        layout: $(ScrollingGroupLayout)
      },
      $(go.TextBlock, new go.Binding(&quot;text&quot;, &quot;key&quot;)),
      $(go.Panel, &quot;Auto&quot;,
        {
          name: &quot;SIZED&quot;,
          desiredSize: new go.Size(NaN, 110),
          minSize: new go.Size(80, NaN)
        },
        $(go.Shape, { fill: &quot;transparent&quot;, stroke: &quot;blue&quot;, strokeWidth: 2 }),
        $(go.Placeholder, { padding: 10, alignment: go.Spot.TopLeft }),
        $(&quot;AutoRepeatButton&quot;,
          { name: &quot;UP&quot;, alignment: go.Spot.TopRight },
          $(go.Shape, &quot;TriangleUp&quot;, { width: 6, height: 6 }),
          {
            click: (e, button) =&gt; {
              var group = button.part;
              var lay = group.layout;
              if (lay.lastIndex &lt; lay.count - 1) {
                lay.topIndex++;
              }
            }
          }),
        $(&quot;AutoRepeatButton&quot;,
          { name: &quot;DOWN&quot;, alignment: go.Spot.BottomRight },
          $(go.Shape, &quot;TriangleDown&quot;, { width: 6, height: 6 }),
          {
            click: (e, button) =&gt; {
              var group = button.part;
              var lay = group.layout;
              if (lay.topIndex &gt; 0) {
                lay.topIndex--;
              }
            }
          })
      )
    );

  var model = new go.GraphLinksModel();
  model.nodeDataArray = [
    { key: &quot;GROUP&quot;, isGroup: true },
    { key: &quot;Alpha&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Beta&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Gamma&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Delta&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Epsilon&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Zeta&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Eta&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Theta&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Iota&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Kappa&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Lambda&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Mu&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Nu&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Xi&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Omicron&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Pi&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Rho&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Sigma&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Tau&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Upsilon&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Phi&quot;, color: &quot;coral&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Chi&quot;, color: &quot;tomato&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Psi&quot;, color: &quot;goldenrod&quot;, group: &quot;GROUP&quot; },
    { key: &quot;Omega&quot;, color: &quot;orange&quot;, group: &quot;GROUP&quot; }
  ];
  myDiagram.model = model;
}
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br></div></div><p>ScrollingTable.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;use strict&quot;;
/*
*  Copyright (C) 1998-2021 by Northwoods Software Corporation. All Rights Reserved.
*/

// A &quot;ScrollingTable&quot; Panel

// This also defines an &quot;AutoRepeatButton&quot; Panel,
// which is used by the scrollbar in the &quot;ScrollingTable&quot; Panel.

// This defines a custom &quot;Button&quot; that automatically repeats its click
// action when the user holds down the mouse.
// The first optional argument may be a number indicating the number of milliseconds
// to wait between calls to the click function.  Default is 50.
// The second optional argument may be a number indicating the number of milliseconds
// to delay before starting calls to the click function.  Default is 500.

// Example:
//   $(&quot;AutoRepeatButton&quot;, 150,  // slower than the default 50 milliseconds between calls
//     {
//       click: function(e, button) { doSomething(button.part); }
//     },
//     $(go.Shape, &quot;Circle&quot;, { width: 8, height: 8 })
//   )
go.GraphObject.defineBuilder(&quot;AutoRepeatButton&quot;, function(args) {
  var repeat = go.GraphObject.takeBuilderArgument(args, 50, function(x) { return typeof x === &quot;number&quot;; });
  var delay = go.GraphObject.takeBuilderArgument(args, 500, function(x) { return typeof x === &quot;number&quot;; });
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

  return $(&quot;Button&quot;,
           {
             actionDown: delayClicking, actionUp: endClicking,
             &quot;ButtonBorder.figure&quot;: &quot;Rectangle&quot;,
             &quot;ButtonBorder.fill&quot;: null,
             &quot;ButtonBorder.stroke&quot;: null,
             &quot;_buttonFillOver&quot;: &quot;rgba(0, 0, 0, .25)&quot;,
             &quot;_buttonStrokeOver&quot;: null,
             cursor: &quot;auto&quot;
           });
});

// Create a scrolling Table Panel, whose name is given as the optional first argument.
// If not given the name defaults to &quot;TABLE&quot;.
// Example use:
//   $(&quot;ScrollingTable&quot;, &quot;TABLE&quot;,
//     new go.Binding(&quot;TABLE.itemArray&quot;, &quot;someArrayProperty&quot;),
//     ...)
// Note that if you have more than one of these in a Part,
// you&#39;ll want to make sure each one has a unique name.
go.GraphObject.defineBuilder(&quot;ScrollingTable&quot;, function(args) {
  var $ = go.GraphObject.make;
  var tablename = go.GraphObject.takeBuilderArgument(args, &quot;TABLE&quot;);

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
    if (idx &lt; 0) idx = 0;
    else if (idx &gt;= table.rowCount - 1) idx = table.rowCount - 1;
    if (table.topIndex !== idx) {
      if (diagram !== null) diagram.startTransaction(&quot;scroll&quot;);
      table.topIndex = idx;
      var node = table.part;  // may need to reroute links if the table contains any ports
      if (node instanceof go.Node) node.invalidateConnectedLinks();
      updateScrollBar(table);
      if (diagram !== null) diagram.commitTransaction(&quot;scroll&quot;);
    }
  }

  function updateScrollBar(table) {
    var bar = table.panel.elt(1);  // the scrollbar is a sibling of the table
    if (!bar) return;
    var idx = table.topIndex;

    var up = bar.findObject(&quot;UP&quot;);
    if (up) up.opacity = (idx &gt; 0) ? 1.0 : 0.3;

    var down = bar.findObject(&quot;DOWN&quot;);
    if (down) down.opacity = (idx &lt; table.rowCount - 1) ? 1.0 : 0.3;

    var tabh = bar.actualBounds.height;
    var rowh = table.elt(idx).actualBounds.height;  //?? assume each row has same height?
    if (rowh === 0 &amp;&amp; idx &lt; table.rowCount-2) rowh = table.elt(idx + 1).actualBounds.height;
    var numVisibleRows = Math.max(1, Math.ceil(tabh / rowh) - 1);
    var needed = idx &gt; 0 || idx + numVisibleRows &lt;= table.rowCount;
    bar.opacity = needed ? 1.0 : 0.5;
  }

  return $(go.Panel, &quot;Table&quot;,
      {
        _updateScrollBar: updateScrollBar
      },
      // this actually holds the item elements
      $(go.Panel, &quot;Table&quot;,
        {
          name: tablename,
          column: 0,
          stretch: go.GraphObject.Fill,
          background: &quot;whitesmoke&quot;,
          rowSizing: go.RowColumnDefinition.None,
          defaultAlignment: go.Spot.Top
        }),

      // this is the scrollbar
      $(go.RowColumnDefinition,
        { column: 1, sizing: go.RowColumnDefinition.None }),
      $(go.Panel, &quot;Table&quot;,
        { column: 1, stretch: go.GraphObject.Vertical, background: &quot;#DDDDDD&quot; },
        // the scroll up button
        $(&quot;AutoRepeatButton&quot;,
          {
            name: &quot;UP&quot;,
            row: 0,
            alignment: go.Spot.Top,
            click: function(e, obj) { incrTableIndex(obj, -1); }
          },
          $(go.Shape, &quot;TriangleUp&quot;,
            { stroke: null, desiredSize: new go.Size(6, 6) })),
        // (someday implement a thumb here and support dragging to scroll)
        // the scroll down button
        $(&quot;AutoRepeatButton&quot;,
          {
            name: &quot;DOWN&quot;,
            row: 2,
            alignment: go.Spot.Bottom,
            click: function(e, obj) { incrTableIndex(obj, +1); }
          },
          $(go.Shape, &quot;TriangleDown&quot;,
            { stroke: null, desiredSize: new go.Size(6, 6) }))
      )
    );
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br></div></div>`,4),c={href:"https://gojs.net/extras/ScrollingGroup.html",target:"_blank",rel:"noopener noreferrer"},m=u("preview");function q(g,d){const s=a("ExternalLinkIcon");return e(),r(t,null,[i,n("p",null,[n("a",c,[m,l(s)])])],64)}var y=o(b,[["render",q]]);export{y as default};
