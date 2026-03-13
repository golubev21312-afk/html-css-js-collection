// ─── CHANDELIER SVG — отдельный файл ──────────────────────────────────────
(function () {
  const wrap = document.querySelector('.chandelier-wrap');
  if (!wrap) return;

  wrap.innerHTML = `
<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg" overflow="visible">
  <defs>
    <filter id="bulbGlow" x="-200%" y="-200%" width="500%" height="500%">
      <feFlood flood-color="#c9a84c" flood-opacity="0.9" result="fc"/>
      <feComposite in="fc" in2="SourceGraphic" operator="in" result="colored"/>
      <feGaussianBlur in="colored" stdDeviation="7" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="bulbGlow2" x="-400%" y="-400%" width="900%" height="900%">
      <feFlood flood-color="#c9a84c" flood-opacity="0.5" result="fc"/>
      <feComposite in="fc" in2="SourceGraphic" operator="in" result="colored"/>
      <feGaussianBlur in="colored" stdDeviation="18" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="metalSheen">
      <feGaussianBlur stdDeviation="0.5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#1e1808"/>
      <stop offset="25%"  stop-color="#6b5220"/>
      <stop offset="50%"  stop-color="#d4b05a"/>
      <stop offset="75%"  stop-color="#6b5220"/>
      <stop offset="100%" stop-color="#1e1808"/>
    </linearGradient>
    <linearGradient id="metalGradV" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#5a4418"/>
      <stop offset="35%"  stop-color="#d4b05a"/>
      <stop offset="65%"  stop-color="#9a7a30"/>
      <stop offset="100%" stop-color="#1e1808"/>
    </linearGradient>
    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="30%" y2="100%">
      <stop offset="0%"   stop-color="#fff8e0" stop-opacity="0.95"/>
      <stop offset="40%"  stop-color="#f0d080" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="crystalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="50%"  stop-color="#f5e0a0" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#2a2010"/>
      <stop offset="50%"  stop-color="#d4b05a"/>
      <stop offset="100%" stop-color="#2a2010"/>
    </linearGradient>
    <radialGradient id="plateGrad" cx="50%" cy="30%" r="60%">
      <stop offset="0%"   stop-color="#e0c060"/>
      <stop offset="100%" stop-color="#4a3818"/>
    </radialGradient>
  </defs>

  <g class="chandelier-body">

    <!-- CEILING MOUNT PLATE -->
    <ellipse cx="160" cy="6" rx="26" ry="7" fill="url(#plateGrad)"/>
    <ellipse cx="160" cy="6" rx="22" ry="5" fill="none" stroke="#d4b05a" stroke-width="0.6" opacity="0.6"/>

    <!-- CHAIN LINKS -->
    <rect x="158.5" y="6" width="3" height="34" fill="url(#metalGradV)" rx="1.5"/>
    <g fill="none" stroke="url(#chainGrad)" stroke-width="1.4">
      <ellipse cx="160" cy="10" rx="5.5" ry="3.5"/>
      <ellipse cx="160" cy="18" rx="5.5" ry="3.5"/>
      <ellipse cx="160" cy="26" rx="5.5" ry="3.5"/>
      <ellipse cx="160" cy="34" rx="5.5" ry="3.5"/>
    </g>

    <!-- TOP CROWN PLATE -->
    <ellipse cx="160" cy="42" rx="26" ry="7" fill="url(#metalGrad)"/>
    <!-- Crown spires -->
    <g fill="url(#metalGradV)" filter="url(#metalSheen)">
      <polygon points="143,42 145.5,24 148,42"/>
      <polygon points="150,42 152.5,20 155,42"/>
      <polygon points="157,42 160,17 163,42"/>
      <polygon points="165,42 167.5,20 170,42"/>
      <polygon points="172,42 174.5,24 177,42"/>
    </g>
    <!-- Crown top ring highlight -->
    <ellipse cx="160" cy="42" rx="26" ry="7" fill="url(#metalGrad)" opacity="0.9"/>
    <ellipse cx="160" cy="41" rx="23" ry="5" fill="none" stroke="#e0c060" stroke-width="0.5" opacity="0.5"/>

    <!-- UPPER DOME BODY -->
    <ellipse cx="160" cy="58" rx="32" ry="11" fill="url(#metalGrad)"/>
    <path d="M128,58 Q128,92 133,97 Q146,103 160,103 Q174,103 187,97 Q192,92 192,58 Z"
          fill="url(#metalGradV)" opacity="0.92"/>
    <!-- Dome ribs -->
    <g stroke="#9a7a30" stroke-width="0.7" opacity="0.55">
      <path d="M132,61 Q135,87 140,96"/>
      <path d="M139,58 Q141,87 146,101"/>
      <path d="M148,57 Q149,88 153,102"/>
      <path d="M160,56 L160,103"/>
      <path d="M172,57 Q171,88 167,102"/>
      <path d="M181,58 Q179,87 174,101"/>
      <path d="M188,61 Q185,87 180,96"/>
    </g>
    <!-- Dome detail rings -->
    <ellipse cx="160" cy="75" rx="30" ry="5" fill="none" stroke="#d4b05a" stroke-width="0.5" opacity="0.3"/>
    <ellipse cx="160" cy="90" rx="29" ry="5" fill="none" stroke="#d4b05a" stroke-width="0.5" opacity="0.3"/>
    <ellipse cx="160" cy="103" rx="32" ry="8" fill="url(#metalGrad)"/>

    <!-- UPPER STEM -->
    <rect x="155.5" y="103" width="9" height="22" fill="url(#metalGradV)" rx="2.5"/>
    <!-- Stem collar -->
    <ellipse cx="160" cy="112" rx="12" ry="4" fill="url(#metalGrad)"/>
    <ellipse cx="160" cy="120" rx="10" ry="3" fill="url(#metalGrad)"/>

    <!-- FIRST RING — MAIN PLATE -->
    <ellipse cx="160" cy="126" rx="54" ry="12" fill="url(#metalGrad)"/>
    <ellipse cx="160" cy="125" rx="50" ry="9"  fill="none" stroke="#d4b05a" stroke-width="0.8" opacity="0.5"/>
    <ellipse cx="160" cy="124" rx="45" ry="7"  fill="none" stroke="#d4b05a" stroke-width="0.5" opacity="0.3"/>

    <!-- 6 ARMS radiating out -->
    <g stroke="url(#chainGrad)" stroke-width="3.5" fill="none" stroke-linecap="round">
      <path d="M118,126 Q96,133 80,148"/>
      <path d="M130,126 Q114,133 104,150"/>
      <path d="M190,126 Q206,133 216,150"/>
      <path d="M202,126 Q224,133 240,148"/>
      <path d="M148,126 Q144,136 140,152"/>
      <path d="M172,126 Q176,136 180,152"/>
    </g>

    <!-- SECOND LOWER RING -->
    <ellipse cx="160" cy="162" rx="68" ry="12" fill="url(#metalGrad)"/>
    <ellipse cx="160" cy="161" rx="64" ry="9"  fill="none" stroke="#d4b05a" stroke-width="0.7" opacity="0.45"/>

    <!-- ARM SOCKETS -->
    <g fill="url(#metalGrad)">
      <ellipse cx="77"  cy="150" rx="7" ry="5"/>
      <ellipse cx="102" cy="153" rx="7" ry="5"/>
      <ellipse cx="138" cy="155" rx="7" ry="5"/>
      <ellipse cx="182" cy="155" rx="7" ry="5"/>
      <ellipse cx="218" cy="153" rx="7" ry="5"/>
      <ellipse cx="243" cy="150" rx="7" ry="5"/>
    </g>

    <!-- CANDLE TUBES -->
    <g fill="url(#metalGradV)">
      <rect x="72"  y="135" width="10" height="22" rx="2.5"/>
      <rect x="97"  y="140" width="10" height="22" rx="2.5"/>
      <rect x="133" y="142" width="10" height="22" rx="2.5"/>
      <rect x="177" y="142" width="10" height="22" rx="2.5"/>
      <rect x="213" y="140" width="10" height="22" rx="2.5"/>
      <rect x="238" y="135" width="10" height="22" rx="2.5"/>
      <!-- Center candle -->
      <rect x="155.5" y="162" width="9" height="26" rx="2.5"/>
    </g>

    <!-- BULB OUTER GLOW -->
    <g class="bulb-outer" filter="url(#bulbGlow2)" opacity="0.14">
      <ellipse cx="77"  cy="128" rx="16" ry="20"/>
      <ellipse cx="102" cy="134" rx="16" ry="20"/>
      <ellipse cx="138" cy="136" rx="16" ry="20"/>
      <ellipse cx="182" cy="136" rx="16" ry="20"/>
      <ellipse cx="218" cy="134" rx="16" ry="20"/>
      <ellipse cx="243" cy="128" rx="16" ry="20"/>
      <ellipse cx="160" cy="158" rx="16" ry="20"/>
    </g>
    <!-- BULB FLAME CORES -->
    <g class="bulb-core" filter="url(#bulbGlow)" opacity="0.75">
      <ellipse cx="77"  cy="128" rx="5.5" ry="8"/>
      <ellipse cx="102" cy="134" rx="5.5" ry="8"/>
      <ellipse cx="138" cy="136" rx="5.5" ry="8"/>
      <ellipse cx="182" cy="136" rx="5.5" ry="8"/>
      <ellipse cx="218" cy="134" rx="5.5" ry="8"/>
      <ellipse cx="243" cy="128" rx="5.5" ry="8"/>
      <ellipse cx="160" cy="158" rx="5.5" ry="8"/>
    </g>

    <!-- ── CRYSTAL TIER 1 — from main ring ── -->
    <g class="crystal" fill="url(#crystalGrad)" opacity="0.55">
      <!-- Center cluster long -->
      <polygon points="155,174 162,174 159,206"/>
      <polygon points="159,174 164,174 162,200"/>
      <polygon points="152,173 157,173 154,193"/>
      <polygon points="163,173 168,173 166,193"/>
      <polygon points="148,172 153,172 150,186"/>
      <polygon points="168,172 173,172 170,186"/>

      <!-- Left side -->
      <polygon points="99,174 104,174 101,198"/>
      <polygon points="94,172 99,172 96,190"/>
      <polygon points="104,173 109,173 107,185"/>
      <!-- Right side -->
      <polygon points="216,174 221,174 219,198"/>
      <polygon points="221,172 226,172 224,190"/>
      <polygon points="211,173 216,173 213,185"/>

      <!-- Scattered medium -->
      <polygon points="118,172 123,172 120,190"/>
      <polygon points="197,172 202,172 200,190"/>
      <polygon points="130,172 135,172 133,188"/>
      <polygon points="186,172 191,172 188,188"/>
      <polygon points="140,173 145,173 143,186"/>
      <polygon points="176,173 181,173 178,186"/>
    </g>

    <!-- ── CRYSTAL TIER 2 — from lower ring (shorter drops) ── -->
    <g class="crystal" fill="url(#crystalGrad2)" opacity="0.45">
      <polygon points="70,174 75,174 72,186"/>
      <polygon points="76,173 80,173 78,184"/>
      <polygon points="240,174 245,174 242,186"/>
      <polygon points="236,173 240,173 238,184"/>
      <polygon points="112,172 116,172 114,184"/>
      <polygon points="204,172 208,172 206,184"/>
      <polygon points="122,172 126,172 124,180"/>
      <polygon points="194,172 198,172 196,180"/>
    </g>

    <!-- BOTTOM FINIAL -->
    <rect x="157" y="162" width="6" height="18" fill="url(#metalGradV)" rx="2"/>
    <polygon points="154,180 166,180 160,202" fill="url(#metalGradV)"/>
    <ellipse cx="160" cy="202" rx="5" ry="3.5" fill="url(#metalGrad)"/>
    <!-- Finial drop crystal — largest -->
    <polygon class="crystal" points="156.5,204 163.5,204 160,230"
             fill="url(#crystalGrad)" opacity="0.7"/>
    <polygon class="crystal" points="158,204 162,204 160,220"
             fill="url(#crystalGrad2)" opacity="0.9"/>

  </g>
</svg>`;
})();
