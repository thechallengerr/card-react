import React, { useState } from 'react'
import GkStats from './GkStats';
import PlayerStats from './PlayerStats'

export default function Player() {
  const [player, setPlayer] = useState({
    background: { type: String },
    player_img: { type: String },
    event: { type: String },
    event_slug: { type: String },
    flag: { type: String },
    rating: { type: Number },
    position: { type: String },
    name: { type: String },
    stats: {
        pace_1: { type: Number },
        pace_2: { type: Number },
        shooting_1: { type: Number },
        shooting_2: { type: Number },
        shooting_3: { type: Number },
        shooting_4: { type: Number },
        shooting_5: { type: Number },
        shooting_6: { type: Number },
        passing_1: { type: Number },
        passing_2: { type: Number },
        passing_3: { type: Number },
        passing_4: { type: Number },
        passing_5: { type: Number },
        passing_6: { type: Number },
        agility_1: { type: Number },
        agility_2: { type: Number },
        agility_3: { type: Number },
        agility_4: { type: Number },
        agility_5: { type: Number },
        defending_1: { type: Number },
        defending_2: { type: Number },
        defending_3: { type: Number },
        defending_4: { type: Number },
        defending_5: { type: Number },
        physical_1: { type: Number },
        physical_2: { type: Number },
        physical_3: { type: Number },
    },
  });
  return (
    <>
      <a className="card-container row" href="/players/{{this._id}}">
        
        <div className="card-info col-sm-3">
          <span className="full-name ">{{}}</span>

          <div className="club-name">{{}}</div>
          <div className="club-name">{{}} | {{}}</div>

        </div>

      </a>
    </>
  )
}
