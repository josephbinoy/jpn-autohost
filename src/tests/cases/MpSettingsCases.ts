import { MpSettingsResult } from "../../parsers";
import { Teams } from "../../Player";

export interface MpSettingsCase {
  title: string,
  texts: string[],
  result: MpSettingsResult
}

export const MpSettingsCases: { [key: string]: MpSettingsCase } = {
  case1_1: {
    title: "case1_1",
    texts: [
      "Room name: 5* (´・ω・`) host rotate, History: https://osu.ppy.sh/mp/53084403",
      "Beatmap: https://osu.ppy.sh/b/853167 Silent Siren - Hachigatsu no Yoru [August]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 5",
      "Slot 1  Not Ready https://osu.ppy.sh/u/111 p1              [Host]",
      "Slot 2  Not Ready https://osu.ppy.sh/u/222 p2              [Hidden, DoubleTime]",
      "Slot 3  Not Ready https://osu.ppy.sh/u/333 p3              ",
      "Slot 4  Not Ready https://osu.ppy.sh/u/444 p4              ",
      "Slot 5  Not Ready https://osu.ppy.sh/u/555 p5              "],
    result: {
      name: "5* (´・ω・`) host rotate", id: 53084403, history: "https://osu.ppy.sh/mp/53084403",
      beatmapId: 853167, beatmapUrl: "https://osu.ppy.sh/b/853167", beatmapTitle: "Silent Siren - Hachigatsu no Yoru [August]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 5,
      players: [
        { id: "p1", slot: 1, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host", profile: "https://osu.ppy.sh/u/111" },
        { id: "p2", slot: 2, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden, DoubleTime", profile: "https://osu.ppy.sh/u/222" },
        { id: "p3", slot: 3, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/333" },
        { id: "p4", slot: 4, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/444" },
        { id: "p5", slot: 5, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/555" },
      ]
    }
  },
  case1_2: {
    title: "case1_2",
    texts: [
      "Room name: 5* (´・ω・`) host rotate, History: https://osu.ppy.sh/mp/53084403",
      "Beatmap: https://osu.ppy.sh/b/853167 Silent Siren - Hachigatsu no Yoru [August]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 5",
      "Slot 1  Not Ready https://osu.ppy.sh/u/111 p1              ",
      "Slot 2  Not Ready https://osu.ppy.sh/u/222 p2              [Hidden, DoubleTime]",
      "Slot 3  Not Ready https://osu.ppy.sh/u/333 p3              [Host]",
      "Slot 4  Not Ready https://osu.ppy.sh/u/444 p4              ",
      "Slot 5  Not Ready https://osu.ppy.sh/u/555 p5              "],
    result: {
      name: "5* (´・ω・`) host rotate", id: 53084403, history: "https://osu.ppy.sh/mp/53084403",
      beatmapId: 853167, beatmapUrl: "https://osu.ppy.sh/b/853167", beatmapTitle: "Silent Siren - Hachigatsu no Yoru [August]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 5,
      players: [
        { id: "p1", slot: 1, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/111" },
        { id: "p2", slot: 2, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden, DoubleTime", profile: "https://osu.ppy.sh/u/222" },
        { id: "p3", slot: 3, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host", profile: "https://osu.ppy.sh/u/333" },
        { id: "p4", slot: 4, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/444" },
        { id: "p5", slot: 5, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/555" },
      ]
    }
  },
  case1_3: {
    title: "case1_3",
    texts: [
      "Room name: 5* (´・ω・`) host rotate, History: https://osu.ppy.sh/mp/53084403",
      "Beatmap: https://osu.ppy.sh/b/853167 Silent Siren - Hachigatsu no Yoru [August]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 5",
      "Slot 1  Not Ready https://osu.ppy.sh/u/666 p6              ",
      "Slot 2  Not Ready https://osu.ppy.sh/u/222 p2              [Hidden, DoubleTime]",
      "Slot 4  Not Ready https://osu.ppy.sh/u/444 p4              [Host]",
      "Slot 5  Not Ready https://osu.ppy.sh/u/555 p5              ",
      "Slot 6  Not Ready https://osu.ppy.sh/u/777 p7              "],
    result: {
      name: "5* (´・ω・`) host rotate", id: 53084403, history: "https://osu.ppy.sh/mp/53084403",
      beatmapId: 853167, beatmapUrl: "https://osu.ppy.sh/b/853167", beatmapTitle: "Silent Siren - Hachigatsu no Yoru [August]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 5,
      players: [
        { id: "p6", slot: 1, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/666" },
        { id: "p2", slot: 2, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden, DoubleTime", profile: "https://osu.ppy.sh/u/222" },
        { id: "p4", slot: 4, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host", profile: "https://osu.ppy.sh/u/444" },
        { id: "p5", slot: 5, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/555" },
        { id: "p7", slot: 6, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/777" },
      ]
    }
  },
  case2: {
    title: "case2",
    texts: [
      "Room name: 4-5 auto host rotation, History: https://osu.ppy.sh/mp/54771533",
      "Beatmap: https://osu.ppy.sh/b/1188131 yuikonnu - Ghost Rule [Hyper]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 5",
      "Slot 1  Not Ready https://osu.ppy.sh/u/123 aaaaaa          [Hidden]",
      "Slot 3  Not Ready https://osu.ppy.sh/u/456 bbbbbb111       ",
      "Slot 4  Not Ready https://osu.ppy.sh/u/789 ccc 23          [Host / Hidden]",
      "Slot 6  Not Ready https://osu.ppy.sh/u/147 d               [Hidden]",
      "Slot 7  Not Ready https://osu.ppy.sh/u/258 eee             ",],
    result: {
      name: "4-5 auto host rotation", id: 54771533, history: "https://osu.ppy.sh/mp/54771533",
      beatmapId: 1188131, beatmapUrl: "https://osu.ppy.sh/b/1188131", beatmapTitle: "yuikonnu - Ghost Rule [Hyper]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 5,
      players: [
        { id: "aaaaaa", slot: 1, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden", profile: "https://osu.ppy.sh/u/123" },
        { id: "bbbbbb111", slot: 3, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/456" },
        { id: "ccc 23", slot: 4, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host / Hidden", profile: "https://osu.ppy.sh/u/789" },
        { id: "d", slot: 6, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden", profile: "https://osu.ppy.sh/u/147" },
        { id: "eee", slot: 7, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/258" }]
    }
  },
  case3: {
    title: "case3",
    texts: [
      "Room name: 4-5* auto host rotaion, History: https://osu.ppy.sh/mp/54581109",
      "Beatmap: https://osu.ppy.sh/b/1418503 tofubeats - CANDYYYLAND feat LIZ - Pa's Lam System Remix [Nathan's Extra]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 7",
      "Slot 1  Not Ready https://osu.ppy.sh/u/1 player1         [Host / Hidden, HardRock]",
      "Slot 2  Not Ready https://osu.ppy.sh/u/2 player2[abc]    ",
      "Slot 3  Not Ready https://osu.ppy.sh/u/3 pl a ye r3      ",
      "Slot 4  Not Ready https://osu.ppy.sh/u/4 pl_a[y]er4      ",
      "Slot 5  Not Ready https://osu.ppy.sh/u/5 player5abcdefga ",
      "Slot 6  Not Ready https://osu.ppy.sh/u/6 pla y e r 6efga [Hidden]",
      "Slot 16  Not Ready https://osu.ppy.sh/u/7 player7abc[fga] [Hidden]"],
    result: {
      name: "4-5* auto host rotaion", id: 54581109, history: "https://osu.ppy.sh/mp/54581109",
      beatmapId: 1418503, beatmapUrl: "https://osu.ppy.sh/b/1418503", beatmapTitle: "tofubeats - CANDYYYLAND feat LIZ - Pa's Lam System Remix [Nathan's Extra]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 7,
      players: [
        { id: "player1", slot: 1, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host / Hidden, HardRock", profile: "https://osu.ppy.sh/u/1" },
        { id: "player2[abc]", slot: 2, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/2" },
        { id: "pl a ye r3", slot: 3, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/3" },
        { id: "pl_a[y]er4", slot: 4, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/4" },
        { id: "player5abcdefga", slot: 5, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/5" },
        { id: "pla y e r 6efga", slot: 6, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden", profile: "https://osu.ppy.sh/u/6" },
        { id: "player7abc[fga]", slot: 16, ready: "Not Ready", team: Teams.None, isHost: false, options: "Hidden", profile: "https://osu.ppy.sh/u/7" },]
    }
  },
  team: {
    title: "team",
    texts: [
      "Room name: 4* auto host rotaion test, History: https://osu.ppy.sh/mp/54597968",
      "Beatmap: https://osu.ppy.sh/b/1569586 Chaos City Niigata - Ukiyoe Yokochou [Insane]",
      "Team mode: TeamVs, Win condition: Score",
      "Active mods: Freemod",
      "Players: 2",
      "Slot 1  Ready     https://osu.ppy.sh/u/111 p1              [Host / Team Blue]",
      "Slot 2  No Map    https://osu.ppy.sh/u/222 p2              [Team Red ]",],
    result: {
      name: "4* auto host rotaion test", id: 54597968, history: "https://osu.ppy.sh/mp/54597968",
      beatmapId: 1569586, beatmapUrl: "https://osu.ppy.sh/b/1569586", beatmapTitle: "Chaos City Niigata - Ukiyoe Yokochou [Insane]",
      teamMode: "TeamVs", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 2,
      players: [
        { id: "p1", slot: 1, ready: "Ready", team: Teams.Blue, isHost: true, options: "Host / Team Blue", profile: "https://osu.ppy.sh/u/111" },
        { id: "p2", slot: 2, ready: "No Map", team: Teams.Red, isHost: false, options: "Team Red", profile: "https://osu.ppy.sh/u/222" }
      ]
    }
  },
  template: {
    title: "template",
    texts: [
      "Room name: roomName, History: https://osu.ppy.sh/mp/123",
      "Beatmap: https://osu.ppy.sh/b/123 map name [normal]",
      "Team mode: HeadToHead, Win condition: Score",
      "Active mods: Freemod",
      "Players: 5",
      "Slot 1  Not Ready https://osu.ppy.sh/u/1 player1         [Host]",
      "Slot 2  Not Ready https://osu.ppy.sh/u/2 player2         ",
      "Slot 3  Not Ready https://osu.ppy.sh/u/3 player3         ",
      "Slot 4  Not Ready https://osu.ppy.sh/u/4 player4         ",
      "Slot 5  Not Ready https://osu.ppy.sh/u/5 player5         "],
    result: {
      name: "roomName", id: 123, history: "https://osu.ppy.sh/mp/123",
      beatmapId: 123, beatmapUrl: "https://osu.ppy.sh/b/123", beatmapTitle: "map name [normal]",
      teamMode: "HeadToHead", winCondition: "Score", activeMods: "Freemod",
      numPlayers: 5,
      players: [
        { id: "player1", slot: 1, ready: "Not Ready", team: Teams.None, isHost: true, options: "Host", profile: "https://osu.ppy.sh/u/1" },
        { id: "player2", slot: 2, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/2" },
        { id: "player3", slot: 3, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/3" },
        { id: "player4", slot: 4, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/4" },
        { id: "player5", slot: 5, ready: "Not Ready", team: Teams.None, isHost: false, options: "", profile: "https://osu.ppy.sh/u/5" },
      ]
    }
  }
}