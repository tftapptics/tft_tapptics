import React, { Component } from 'react'
import { HexUtils, GridGenerator, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';

class HoneycombDrag extends Component {


  render() {
    // const { hexagons
    let champs = this.props.champions
    let hexagons = GridGenerator.parallelogram(-2, 3, -2, 1).map(hexagon => {
      return champs.map(champ => {
        let name = champ.attributes.data.name.split(',')
        return Object.assign({}, hexagon, {
          text: name[0],
          image: champ.attributes.data.champion_thumbnail
        });
      })
    })

    return (
         <Layout className="HoneycombDrag" size={{ x: 5, y: 5 }} flat={false} spacing={1.05} origin={{ x: -40, y: 50 }}>
        {
          hexagons[0].map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q+i}
              r={hex.r}
              s={hex.s}
              fill={hex.image ? HexUtils.getID(hex) : null}
              data={hex}
              // onDragStart={(e, h) => this.onDragStart(e, h)}
              // onDragEnd={(e, h, s) => this.onDragEnd(e, h, s)}
            >
              <Text className="hex-text">{hex.text}</Text>
              { hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} /> }
              {/* { console.log(this.props.champions.find(champ => champ.attributes.data.name.includes(hex.text).attributes.data.champion_thumbnail))} */}
            </Hexagon>
          ))
        }
      </Layout>
    )
  }
}

export default HoneycombDrag;