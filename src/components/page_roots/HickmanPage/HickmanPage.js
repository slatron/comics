/* eslint-disable */
import React, {useState, useEffect} from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import CharacterIcon from './CharacterIcon/CharacterIcon'
import SvgText from './SvgText/SvgText'

import {useEnterEffect} from './useEnterEffect'
import './HickmanPage.scss'

const HickmanPage = () => {
  const [frame, setFrame] = useState(1)

  useEffect(() => {
    let timesRun = 0;
    const interval = setInterval(() => {
        timesRun += 1
        if(timesRun === 12) {
          clearInterval(interval);
        }
        setFrame((frame) => frame + 1)
    }, 1000); 
  }, [])

  useEnterEffect('middle-a')
  return (
    <>
      <CommonTemplate pageName="hickman">
        <div className="center-svg">
          <svg id="hickman-svg" width="1000" height="1000">
            <defs>
              <linearGradient id="aShield" gradientTransform="rotate(60)">
                <stop offset="30%"  stopColor="#57b1e2" />
                <stop offset="100%" stopColor="#264990" />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="182" stroke="#000000" fill="#bdb2bb" />
            <circle cx="500" cy="500" r="172" stroke="#000000" fill="url('#aShield')" />
            <g
              id="inner-dashed-line"
              stroke="#EEEEEE"
              strokeDasharray="5 2"
              strokeOpacity="0.25"
              fillOpacity="0.0"
            >
              <path
                d="M 500 328 L 650 420 V 580 L 500 672 L 350 580 V 420 L 500 328" />
              <line
                x1="500" y1="328"
                x2="500" y2="672" />
              <line
                x1="650" y1="420"
                x2="350" y2="580" />
              <line
                x1="650" y1="580"
                x2="350" y2="420" />
            </g>
            <g id="center-a-logo">
              <circle cx="500" cy="500" r="110" fill="#2A3879" />
              <circle cx="500" cy="500" r="85" fill="#FFFFFF" />
              <circle cx="500" cy="500" r="75" fill="#2A3879" />
              <circle cx="500" cy="500" r="60" fill="#FFFFFF" />
              <path
                className="middle-a"
                d="M 540 420 V 546 H 515 V 530 H 478 L 454 579 L 430 564 L 510 414"
                stroke="#2A3879"
                fill="#2A3879"  />
              <path
                d="M 515 453 V 510 H 485"
                fill="#FFFFFF"  />
              <line x1="515" y1="495" x2="540" y2="520" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="540" y1="520" x2="515" y2="545" stroke="#FFFFFF" strokeWidth="2" />
            </g>
            {frame < 4 &&
              <SvgText fontSize="20" x="200" y="240" textId="started">
                It started with two men
              </SvgText>
            }
            {frame > 1 && frame < 6 &&
              <SvgText fontSize="16" x="540" y="280" textId="life">
                one was life
              </SvgText>
            }
            {frame > 2 && frame < 7 &&
              <SvgText fontSize="16" x="260" y="700" textId="death">
                one was death
              </SvgText>
            }
            {frame > 4 && frame < 9 &&
              <SvgText fontSize="24" x="200" y="370" textId="we-have-to">
                We have to
              </SvgText>
            }
            {frame > 5 && frame < 11 &&
              <SvgText fontSize="24" x="680" y="620" textId="get-bigger">
                get bigger
              </SvgText>
            }
            {frame > 1 &&
              <CharacterIcon name="captain-america" x="500" y="323">
                <path
                  className="captain-america"
                  d="M 500 306 L 504 316 H 515 L 506 323 L 511 336 L 500 328 L 489 336 L 494 323 L 485 316 H 496 L 500 306"
                  fill="#2A3879"
                  stroke="#000000" />
              </CharacterIcon>
            }
            {frame > 2 &&
              <CharacterIcon name="iron-man" x="500" y="677">
                <circle cx="500" cy="677" r="20" stroke="#2A3879" strokeWidth="2" fill="#ffffff"  />
                <g stroke="#2A3879" strokeWidth="2">
                  <line
                    x1="500" y1="657"
                    x2="500" y2="665">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>
                  <line
                    x1="500" y1="689"
                    x2="500" y2="697">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>

                  <line
                    x1="483" y1="689"
                    x2="490" y2="684">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>
                  <line
                    x1="510" y1="670"
                    x2="517" y2="665">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>

                  <line
                    x1="483" y1="665"
                    x2="490" y2="670">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>
                  <line
                    x1="510" y1="684"
                    x2="517" y2="689">
                    <animate attributeName="stroke-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                  </line>
                </g>
                <path 
                  className="iron-man"
                  d="m 513.73551,677.11054 c 0,7.31244 -6.17919,13.24034 -13.80161,13.24034 -7.62242,0 -13.80161,-5.9279 -13.80161,-13.24034 0,-7.31244 6.17919,-13.24034 13.80161,-13.24034 0.28687,0 0.57169,0.008 0.85422,0.0249 7.22455,0.4232 12.94739,6.17815 12.94739,13.21539 z"
                  stroke="#2A3879" strokeWidth="2" fill="#ffffff"
                  />
              </CharacterIcon>
            }
            {frame > 4 &&
              <>
                <CharacterIcon name="hulk" x="345" y="415">
                  <path
                    className="hulk"
                    d="m 333.38927,402.33417 h 7.20291 v 9.54154 h 8.46576 v -9.44798 h 7.10936 v 25.21018 h -7.29644 v -9.86893 h -8.27868 v 9.91571 h -7.39 z"
                    stroke="#000000"
                    fill="#2A3879" />
                </CharacterIcon>
                <CharacterIcon name="thor" x="655" y="415">
                <path
                  className="thor"
                  d="m 643.76473,401.91322 h 5.65944 v -1.12252 h 11.31887 v 1.26285 h 5.65944 v 9.63507 h -5.61268 v 1.87087 l -3.3208,0.0468 0.043,18.12661 -4.4864,-0.0204 -0.064,-18.11716 -3.02296,-0.0358 v -1.82412 h -6.17395 z"
                  stroke="#000000"
                  fill="#2A3879" />
                <path
                  d="M 659 419 L 651 425 V 429 L 659 424 V 419"
                  fill="#2A3879" stroke="#ffffff">
                    <animate attributeName="fill-opacity" values="0.0;1.0" dur="6s" repeatCount="1" />
                </path>
              </CharacterIcon>
              </>
            }
            {frame > 5 &&
              <>
                <CharacterIcon name="hawkeye" x="345" y="575">
                <path
                  className="hawkeye"
                  d="m 363.15463,574.80334 c 0,9.20462 -7.96441,16.66644 -17.78897,16.66644 -9.82456,0 -17.78897,-7.46182 -17.78897,-16.66644 0,-9.20462 7.96441,-16.66644 17.78897,-16.66644 0.46687,0 0.92954,0.0169 1.38735,0.0499 9.17618,0.66319 16.40162,7.8493 16.40162,16.6165 z"
                  stroke="#2A3879"
                  strokeWidth="6"
                  fill="#ffffff" />
                <circle cx="345" cy="575" r="14" fill="#ffffff"  />
                <circle cx="345" cy="575" r="10" fill="#2A3879">
                  <animate attributeName="fill-opacity" values="0.0;1.0" dur="3s" repeatCount="1" />
                </circle>
                <circle cx="345" cy="575" r="5" fill="#ffffff"  />
              </CharacterIcon>
                <CharacterIcon name="black-widow" x="655" y="575">
                <path
                  className="black-widow"
                  d="m 667.76623,558.9439 c 0,0 -11.9997,-8.80846 -24.92957,0.18711 m 0,0 c 0,0 -0.0935,2.89987 1.77735,4.95785 l -2.6862,5.55121 c 0,0 -5.23848,0.56127 -2.43215,4.95785 l 7.53364,16.5233 -5.66275,-16.14912 c 0,0 2.43215,0.37418 2.05797,-3.83532 l 3.06037,-4.0545 c 0,0 0.60805,1.02899 1.82413,1.30962 l -1.33176,5.18368 c 0,0 -2.94665,1.21608 -0.51449,3.83532 l 6.25945,9.37049 -4.94984,-9.5108 c 0,0 1.82412,-0.70159 0.42096,-3.50792 l 1.00434,-4.71596 c 0,0 2.47893,0.88867 3.60146,0.98221 0,0 -5.46902,5.29799 1.54681,9.46071 0,0 4.52554,1.17733 6.02225,-2.89185 0,0 0.31273,-3.78992 -1.74524,-6.5027 0,0 1.65973,0.0273 3.06289,-1.04837 l 2.23842,4.63847 c 0,0 -1.59026,1.59025 0.28063,3.13374 l -4.63045,10.10278 6.26747,-9.9157 c 0,0 2.01121,-1.40316 0.0468,-3.64822 l -2.61262,-5.15297 c 0,0 0.74836,-0.0468 1.40317,-1.1693 l 3.64903,4.1367 c 0,0 -1.77734,2.61924 1.44994,3.88209 l -5.8158,16.09432 7.92055,-16.51527 c 0,0 2.8531,-3.92886 -2.15152,-5.00462 l -3.3684,-5.39955 c 0,0 1.82411,-2.5257 1.40316,-5.28526"
                  stroke="#000000" fill="#2A3879" />
              </CharacterIcon>
              </>
            }
            </svg>
        </div>
      </CommonTemplate>
    </>
  )
}

export default HickmanPage
