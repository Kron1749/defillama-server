export default {
  pyth: require("./oracles/pyth"),
  unknownTokensV3: require("./other/unknownTokensV3"),
  dinari: require("./rwa/dinari"),
  few: require("./other/few"),
  ociswap: require("./markets/ociswap"),
  optimBonds: require("./other/optimBonds"),
  tangleswap: require("./markets/tangleswap"),
  defiChain: require("./other"),
  cantoLending: require("./moneyMarkets/compound"),
  xexchange: require("./markets/xexchange"),
  balanced: require("./markets/balanced"),
  tinyman: require("./markets/tinyman"),
  silo: require("./moneyMarkets/silo"),
  hlp: require("./yield/hlp"),
  digift: require("./rwa/digift"),
  gmxV2: require("./other/gmxV2"),
  timeswap: require("./yield/timeswap"),
  wemix: require("./markets/uniswap"),
  dforce: require("./moneyMarkets/dforce"),
  shlb: require("./other"),
  minswap: require("./markets/minswap2"),
  ergopad: require("./markets/ergopad"),
  sundaeswap: require("./markets/sundaeswap"),
  wingriders: require("./markets/wingriders"),
  metronome: require("./other"),
  buck: require("./other"),
  // ondo: require("./yield/ondo"),
  aave: require("./moneyMarkets/aave"),
  geist: require("./moneyMarkets/aave"),
  radiant: require("./moneyMarkets/aave"),
  uwulend: require("./moneyMarkets/aave"),
  //klap: require("./moneyMarkets/aave"),
  //valas: require("./moneyMarkets/aave"),
  moonwell: require("./moneyMarkets/compound"),
  hover: require("./moneyMarkets/compound"),
  sumerian: require("./moneyMarkets/compound"),
  compound: require("./moneyMarkets/compound"),
  venus: require("./moneyMarkets/compound"),
  ironbank: require("./moneyMarkets/compound"),
  benqi: require("./moneyMarkets/compound"),
  traderjoe: require("./moneyMarkets/compound"),
  rari: require("./moneyMarkets/compound"),
  aurigami: require("./moneyMarkets/compound"),
  cream: require("./moneyMarkets/compound"),
  scream: require("./moneyMarkets/compound"),
  tonpound: require("./moneyMarkets/compound"),
  lodestar: require("./moneyMarkets/compound"),
  marev2: require("./moneyMarkets/compound"),
  tenderfi: require("./moneyMarkets/compound"),
  // euler: require("./moneyMarkets/euler"),
  yearn: require("./yield/yearn"),
  convex: require("./yield/convex"),
  alchemix: require("./yield/alchemix"),
  meanFinance: require("./yield/mean-finance"),
  misc4626: require("./yield/misc4626"),
  vesper: require("./yield/vesper"),
  yieldProtocol: require("./yield/yield-protocol"),
  levelFinance: require("./yield/level-finance"),
  quickperps: require("./yield/quickperps"),
  timeless: require("./yield/timeless"),
  beefy: require("./yield/beefy"),
  platypus: require("./markets/platypus"),
  curve: require("./markets/curve"),
  curve1: require("./markets/curve"),
  curve2: require("./markets/curve"),
  curve3: require("./markets/curve"),
  curve4: require("./markets/curve"),
  curve5: require("./markets/curve"),
  curve6: require("./markets/curve"),
  curve7: require("./markets/curve"),
  curve8: require("./markets/curve"),
  curve9: require("./markets/curve"),
  curve10: require("./markets/curve"),
  curve11: require("./markets/curve"),
  curve12: require("./markets/curve"),
  curve13: require("./markets/curve"),
  balancer1: require("./markets/balancer"),
  balancer2: require("./markets/balancer"),
  balancer3: require("./markets/balancer"),
  balancer4: require("./markets/balancer"),
  balancer5: require("./markets/balancer"),
  balancer6: require("./markets/balancer"),
  balancer7: require("./markets/balancer"),
  linearPools: require("./markets/balancer"),
  hop: require("./markets/hop"),
  ankr: require("./liquidStaking/ankr"),
  synthetix: require("./other"),
  glp: require("./other"),
  abracadabra: require("./other"),
  unknownTokens: require("./other"),
  unknownTokens2: require("./other"),
  pods: require("./other"),
  distressed: require("./other"),
  manualInput: require("./other"),
  Ovix: require("./moneyMarkets/compound"),
  realt: require("./other"),
  uniswap: require("./markets/uniswap"),
  glacier: require("./markets/uniswap"),
  sushiswap1: require("./markets/uniswap"),
  sushiswap2: require("./markets/uniswap"),
  sushiswap3: require("./markets/uniswap"),
  traderJoe: require("./markets/uniswap"),
  // vvsFinance: require("./markets/uniswap"),
  quickswap: require("./markets/uniswap"),
  biswap: require("./markets/uniswap"),
  // mmFinance: require("./markets/uniswap"),
  trisolaris: require("./markets/uniswap"),
  pangolin: require("./markets/uniswap"),
  elysium: require("./markets/uniswap"),
  spiritswap: require("./markets/uniswap"),
  // pancakeswap: require("./markets/uniswap"),
  spookyswap: require("./markets/uniswap"),
  tombswap: require("./markets/uniswap"),
  solidly: require("./markets/uniswap"),
  // diffusion: require("./markets/uniswap"),
  equalizer: require("./markets/uniswap"),
  camelot: require("./markets/uniswap"),
  velocore: require("./markets/uniswap"),
  mute: require("./markets/uniswap"),
  spacefi: require("./markets/uniswap"),
  gemswap: require("./markets/uniswap"),
  pulsex: require("./markets/uniswap"),
  extraUniV2Lps: require("./markets/uniswap"),
  thena: require("./markets/uniswap"),
  fvm: require("./markets/uniswap"),
  velocimeter: require("./markets/uniswap"),
  aerodrome: require("./markets/uniswap"),
  jibswap: require("./markets/uniswap"),
  stargate: require("./markets/stargate"),
  jarvis: require("./markets/jarvis"),
  chainlinkNFT: require("./nft/chainlink"),
  arrakis: require("./markets/arrakis"),
  aktionariat: require("./markets/aktionariat"),
  yieldYak: require("./yield/yield-yak"),
  tezos: require("./tezos"),
  aaveDebt: require("./moneyMarkets/aave-debt"),
  saber: require("./solana/saber"),
  reservoir: require("./nft/reservoir"),
  jpegd: require("./yield/jpegd"),
  mare: require("./moneyMarkets/compound"),
  collateralizedAssets: require("./other"),
  sweth: require("./other"),
  gmd: require("./other"),
  stkaurabal: require("./other"),
  glpDerivs: require("./yield/glpDerivs"),
  pendle: require("./yield/pendle"),
  phux: require("./markets/phux"),
  wombat: require("./markets/wombat"),
  backed: require("./rwa/backed"),
  vela: require("./yield/vela"),
  zkSwap: require("./markets/uniswap"),
  chai: require("./yield/chai"),
  ondo: require("./rwa/ondo"),
  hashnote: require("./rwa/hashnote"),
  hiyield: require("./rwa/hiyield"),
  mooBvm: require("./other"),
  mux: require("./yield/mux"),
  velgd: require("./other"),
  maverick: require("./markets/maverick"),
  steer: require("./markets/steer"),
  wstmtrg: require("./yield/wstmtrg"),
  zkswap: require("./markets/uniswap"),
  osETH: require("./yield/osETH"),
  weETH: require("./yield/weETH"),
  pxeth: require("./liquidStaking/pxeth"),
  sthApt: require("./liquidStaking/sthapt"),
  ambitFinance: require("./yield/ambit-finance"),
  eigenpie: require("./yield/eigenpie"),
};
