import React from 'react'
import PropTypes from 'prop-types'

class ExpertRelation extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      expertRelation: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    })
  }
  // fake data
  static defaultProps = {
    data: {
      expertRelation: [
        {
          code:
            '<script>var nodes = [{"name":"2li9srmk0l83"},{"name":"53g0c5loma8f"},{"name":"raic3a7roac"},{"name":"oq9aqh16nj7"},{"name":"fpsm6n62l7n"},{"name":"o91ld2nmck2"}];var edges = [{"source":0,"target":1},{"source":0,"target":2},{"source":0,"target":3},{"source":0,"target":4},{"source":0,"target":5}];var width = 400;var height = 400;var svg = d3.select("undefined").append("svg").attr("width", width).attr("height", height);var force = d3.layout.force().nodes(nodes).links(edges).size([width, height]).linkDistance(150).charge(-400);force.start();var svg_edges = svg.selectAll("line").data(edges).enter().append("line").style("stroke","#ccc").style("stroke-width",1);var color = d3.scale.category20();var svg_nodes = svg.selectAll("circle").data(nodes).enter().append("circle").attr("r", 10).style("fill",function(d,i) {return color(i);}).call(force.drag);var svg_texts = svg.selectAll("text").data(nodes).enter().append("text").style("fill", "black").attr("dx", 20).attr("dy", 8).text(function(d){return d.name;});force.on("tick", function(){svg_edges.attr("x1",function(d){ return d.source.x; }).attr("y1",function(d){ return d.source.y; }).attr("x2",function(d){ return d.target.x; }).attr("y2",function(d){ return d.target.y; });svg_nodes.attr("cx",function(d){ return d.x; }).attr("cy",function(d){ return d.y; });svg_texts.attr("x", function(d){ return d.x; }).attr("y", function(d){ return d.y; });});</script>'
        }
      ]
    }
  }
  componentWillMount() {
    React.createElement(this.props.data.expertRelation[0].code)
    /* const script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = this.props.data.expertRelation[0].code;
            document.body.appendChild(script); */
  }
  render() {
    return <div />
  }
}

export default ExpertRelation
