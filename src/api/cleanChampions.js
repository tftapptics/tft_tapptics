export const cleanChampions = champs => {
  const { id, name, champion_thumbnail, cost, health, dmg, armor, mr, atk_spd, range, ability_thumbnail, model_img } = champs.attributes.data
  return champs.map(champ => {
    return {
      id,
      name,
      champion_thumbnail,
      cost,
      health,
      dmg,
      armor,
      mr,
      atk_spd,
      range,
      ability_thumbnail,
      model_img,
      ability_info: {
        damage: champ.attributes.data.ability_info.damage || champ.attributes.data.ability_info.totaldamage,
        
      }
    }
  })
}