import React, { Component } from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default class Honeycomb extends Component {
  render() {
    return (
      <div className="Honeycomb">
        <HexGrid width={1000} height={600} viewBox="-50 -50 100 100">
          <Layout size={{ x: 12, y: 12 }} flat={false} spacing={1.1} origin={{ x: -10, y: -10 }}>
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
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
          <Pattern className="pattern" id="pat-1" link="https://i.imgur.com/MTvNXB1.png" />
          <Pattern id="pat-2" link="https://i.imgur.com/EkVoOjj.png" className="" />
        </HexGrid>
      </div>
    )
  }
}
