import React, { Component } from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default class HoneycombDrag extends Component {
  render() {
    return (
      <section className="HoneycombDrag">
        <HexGrid width={1000} height={250} viewBox="-50 -50 100 100">
          <Layout size={{ x: 8, y: 8 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={-6} r={-2} s={0}  />
            <Hexagon q={-5} r={-2} s={0}  />
            <Hexagon q={-4} r={-2} s={0}  />
            <Hexagon q={-3} r={-2} s={0}  />
            <Hexagon q={-2} r={-2} s={0}  />
            <Hexagon q={-1} r={-2} s={0}  />
            <Hexagon q={0} r={-2} s={0}  />
            <Hexagon q={1} r={-2} s={0}  />
            <Hexagon q={2} r={-2} s={0}  />
            <Hexagon q={3} r={-2} s={0}  />
            <Hexagon q={4} r={-2} s={0}  />
            <Hexagon q={5} r={-2} s={0}  />
            <Hexagon q={6} r={-2} s={0}  />
            <Hexagon q={-6} r={-1} s={0}  />
            <Hexagon q={-5} r={-1} s={0}  />
            <Hexagon q={-4} r={-1} s={0}  />
            <Hexagon q={-3} r={-1} s={0}  />
            <Hexagon q={-2} r={-1} s={0}  />
            <Hexagon q={-1} r={-1} s={0}  />
            <Hexagon q={0} r={-1} s={0}  />
            <Hexagon q={1} r={-1} s={0}  />
            <Hexagon q={2} r={-1} s={0}  />
            <Hexagon q={3} r={-1} s={0}  />
            <Hexagon q={4} r={-1} s={0}  />
            <Hexagon q={5} r={-1} s={0}  />
            <Hexagon q={-7} r={0} s={0}  />
            <Hexagon q={-6} r={0} s={0}  />
            <Hexagon q={-5} r={0} s={0}  />
            <Hexagon q={-4} r={0} s={0}  />
            <Hexagon q={-3} r={0} s={0}  />
            <Hexagon q={-2} r={0} s={0}  />
            <Hexagon q={-1} r={0} s={0}  />
            <Hexagon q={0} r={0} s={0}  />
            <Hexagon q={1} r={0} s={0}  />
            <Hexagon q={2} r={0} s={0}  />
            <Hexagon q={3} r={0} s={0}  />
            <Hexagon q={4} r={0} s={0}  />
            <Hexagon q={5} r={0} s={0}  />
            <Hexagon q={-7} r={1} s={0}  />
            <Hexagon q={-6} r={1} s={0}  />
            <Hexagon q={-5} r={1} s={0}  />
            <Hexagon q={-4} r={1} s={0}  />
            <Hexagon q={-3} r={1} s={0}  />
            <Hexagon q={-2} r={1} s={0}  />
            <Hexagon q={-1} r={1} s={0}  />
            <Hexagon q={0} r={1} s={0}  />
            <Hexagon q={1} r={1} s={0}  />
            <Hexagon q={2} r={1} s={0}  />
            <Hexagon q={3} r={1} s={0}  />
            <Hexagon q={4} r={1} s={0}  />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
        </HexGrid>
      </section>
    )
  }
}
