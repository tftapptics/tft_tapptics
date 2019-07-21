import React, { Component } from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default class Honeycomb extends Component {
  render() {
    return (
      <Layout className="Honeycomb" size={{ x: 13, y: 13 }} flat={false} spacing={1.1} origin={{ x: -10, y: -10 }}>
        <Hexagon q={-1} r={-1} s={0} fill="pat-1"  />
        <Hexagon q={0} r={-1} s={0} fill="pat-2" />
        <Hexagon q={1} r={-1} s={0} fill="pat-3"/>
        <Hexagon q={2} r={-1} s={0} fill="pat-4" />
        <Hexagon q={-1} r={0} s={0} fill="pat-5" />
        <Hexagon q={1} r={0} s={0} fill="pat-6" />
        <Hexagon q={-2} r={0} s={0} fill="pat-7" />
        <Hexagon q={0} r={0} s={0} fill="pat-8" />
        <Hexagon q={-2} r={1} s={0} fill="pat-9" />
        <Hexagon q={-1} r={1} s={0} fill="pat-10" />
        <Hexagon q={0} r={1} s={0} fill="pat-11" />
        <Hexagon q={1} r={1} s={0} fill="pat-12" />
      </Layout>
    )
  }
}
