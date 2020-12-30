import React from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import CharacterIcon from './CharacterIcon/CharacterIcon'

import './HickmanPage.scss'

const HickmanPage = () => {
  return (
    <>
      <CommonTemplate pageName="hickman">
        <div className="center-svg">
          <svg id="hickman-svg" width="1000" height="1000">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(60)">
                <stop offset="30%"  stop-color="#57b1e2" />
                <stop offset="100%" stop-color="#264990" />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="182" stroke="#000000" fill="#bdb2bb" />
            <circle cx="500" cy="500" r="172" stroke="#000000" fill="url('#myGradient')" />
            <g
              id="inner-dashed-line"
              stroke="#EEEEEE"
              stroke-dasharray="5 2"
              stroke-opacity="0.25"
              fill-opacity="0.0"
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
                d="M 540 420 V 546 H 515 V 530 H 478 L 454 579 L 430 564 L 510 414"
                fill="#2A3879"  />
              <path
                d="M 515 453 V 510 H 485"
                fill="#FFFFFF"  />
              <line x1="515" y1="495" x2="540" y2="520" stroke="#FFFFFF" stroke-width="2" />
              <line x1="540" y1="520" x2="515" y2="545" stroke="#FFFFFF" stroke-width="2" />
            </g>
            <CharacterIcon name="captain-america" x="500" y="323">
              <path
                d="M 500 306 L 504 316 H 515 L 506 323 L 511 336 L 500 328 L 489 336 L 494 323 L 485 316 H 496 L 500 306"
                fill="#2A3879"
                stroke="#000000" />
            </CharacterIcon>
            <CharacterIcon name="iron-man" x="500" y="677">
              <circle cx="500" cy="677" r="20" stroke="#2A3879" stroke-width="2" fill="#ffffff"  />
              <g stroke="#2A3879" stroke-width="2">
                <line
                  x1="500" y1="657"
                  x2="500" y2="697" />
                <line
                  x1="517" y1="665"
                  x2="483" y2="689" />
                <line
                  x1="517" y1="689"
                  x2="483" y2="665" />
              </g>
              <circle cx="500" cy="677" r="13" stroke="#2A3879" stroke-width="2" fill="#ffffff"  />
            </CharacterIcon>
            <CharacterIcon name="hulk" x="345" y="415">
              <rect
                x="334" y="402" width="8" height="26"
                stroke="#2A3879"
                fill="#2A3879" />
              <rect
                x="335" y="412" width="16" height="6"
                stroke="#2A3879"
                fill="#2A3879" />
              <rect
                x="349" y="402" width="8" height="26"
                stroke="#2A3879"
                fill="#2A3879" />
            </CharacterIcon>
            <CharacterIcon name="hawkeye" x="345" y="575">
              <circle cx="345" cy="575" r="20" fill="#2A3879"  />
              <circle cx="345" cy="575" r="14" fill="#ffffff"  />
              <circle cx="345" cy="575" r="10" fill="#2A3879"  />
              <circle cx="345" cy="575" r="5" fill="#ffffff"  />
            </CharacterIcon>
            <CharacterIcon name="black-widow" x="655" y="575">
              <defs>
                <clipPath id="widow-circle-clip">
                  <circle cx="655" cy="575" r="20" />
                </clipPath>
              </defs>
              <circle cx="655" cy="558" r="13" fill="#2A3879" clip-path="url(#widow-circle-clip)" />
              <circle cx="655" cy="575" r="5" fill="#2A3879" />
              <path d="M 643 563 L 639 573 L 647 566" fill="#2A3879" />
              <path d="M 667 563 L 671 573 L 663 566" fill="#2A3879" />
              <circle cx="640" cy="572" r="3" fill="#2A3879" />
              <circle cx="670" cy="572" r="3" fill="#2A3879" />
              <line x1="640" y1="572" x2="645" y2="589" stroke="#2A3879" />
              <line x1="670" y1="572" x2="665" y2="589" stroke="#2A3879" />

              <line x1="649" y1="563" x2="646" y2="576" stroke="#2A3879" stroke-width="2" />
              <circle cx="646" cy="576" r="2" fill="#2A3879" />
              <line x1="646" y1="576" x2="650" y2="586" stroke="#2A3879" />

              <line x1="661" y1="563" x2="664" y2="576" stroke="#2A3879" stroke-width="2" />
              <circle cx="664" cy="576" r="2" fill="#2A3879" />
              <line x1="664" y1="576" x2="660" y2="586" stroke="#2A3879" />

            </CharacterIcon>
            <CharacterIcon name="thor" x="655" y="415">
              <rect x="643" y="404" width="24" height="12" fill="#2A3879" />
              <rect x="648" y="403" width="14" height="14" fill="#2A3879" />
              <rect x="652" y="416" width="6" height="16" fill="#2A3879" />
              <path
                d="M 659 419 L 651 425 V 429 L 659 424 V 419"
                fill="#2A3879" stroke="#ffffff" />
            </CharacterIcon>
          </svg>
        </div>
      </CommonTemplate>
    </>
  )
}

export default HickmanPage
