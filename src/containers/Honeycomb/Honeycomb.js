import React, { Component } from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default class Honeycomb extends Component {
  render() {
    return (
      <div>
        <HexGrid width={600} height={500} viewBox="-50 -50 100 100">
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            <Hexagon q={-1} r={-1} s={-1} />
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0} />
            <Hexagon q={1} r={0} s={-1} />
            <Hexagon q={-1} r={1} s={0} fill="pat-2" />
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
          <Pattern id="pat-1" link="https://i.imgur.com/MTvNXB1.png" />
          <Pattern id="pat-2" link="https://i.imgur.com/EkVoOjj.png" />
        </HexGrid>
      </div>
    )
  }
}
