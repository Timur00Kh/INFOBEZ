function isUpperCase(character) {
    return character === character.toUpperCase();
}

let en_text = 'Xzqlm ivl Xzmrclqkm \n' +
    'Rivm Icabmv \n' +
    'Kpixbmz 1 \n' +
    'Qb qa i bzcbp cvqdmzaittg iksvwetmloml, bpib i aqvotm uiv qv xwaamaaqwv wn i owwl nwzbcvm, ucab jm qv eivb wn i eqnm. \n' +
    '\n' +
    'Pwemdmz tqbbtm svwev bpm nmmtqvoa wz dqmea wn ackp i uiv uig jm wv pqa nqzab mvbmzqvo i vmqopjwczpwwl, bpqa bzcbp qa aw emtt nqfml qv bpm uqvla wn bpm aczzwcvlqvo niuqtqma, bpib pm qa kwvaqlmzml bpm zqopbnct xzwxmzbg wn awum wvm wz wbpmz wn bpmqz licopbmza. \n' +
    '"Ug lmiz Uz. Jmvvmb," aiql pqa tilg bw pqu wvm lig, "pidm gwc pmizl bpib Vmbpmznqmtl Xizs qa tmb ib tiab?" \n' +
    '\n' +
    'Uz. Jmvvmb zmxtqml bpib pm pil vwb. \n' +
    '\n' +
    '\n' +
    '"Jcb qb qa, zmbczvml apm; "nwz Uza. Twvo pia rcab jmmv pmzm, ivl apm bwtl um itt ijwcb qb. \n' +
    '\n' +
    'Uz. Jmvvmb uilm vw ivaemz. \n' +
    '\n' +
    '"Lw gwc vwb eivb bw svwe epw pia bismv qb?" kzqml pqa eqnm quxibqmvbtg. \n' +
    '\n' +
    '"GWC eivb bw bmtt um, ivl Q pidm vw wjrmkbqwv bw pmizqvo qb." \n' +
    'Bpqa eia qvdqbibqwv mvwcop. \n' +
    '"Epg, ug lmiz, gwc ucab svwe, Uza. Twvo aiga bpib Vmbpmznqmtl qa bismv jg i gwcvo uiv wn tizom nwzbcvm nzwu bpm vwzbp wn Mvotivl; bpib pm kium lwev wv Uwvlig qv i kpiqam ivl nwcz bw amm bpm xtikm, ivl eia aw uckp lmtqopbml eqbp qb, bpib pm iozmml eqbp Uz. Uwzzqa quumlqibmtg; bpib pm qa bw bism xwaamaaqwv jmnwzm Uqkpimtuia, ivl awum wn pqa amzdivba izm bw jm qv bpm pwcam jg bpm mvl wn vmfb emms." \n' +
    '\n' +
    '"Epib qa pqa vium?" \n' +
    '"Jqvotmg." \n' +
    '"Qa pm uizzqml wz aqvotm?" \n' +
    '"Wp! Aqvotm, ug lmiz, bw jm aczm! I aqvotm uiv wn tizom nwzbcvm; nwcz wz nqdm bpwcaivl i gmiz. Epib i nqvm bpqvo nwz wcz oqzta!" \n' +
    '"Pwe aw? Pwe kiv qb innmkb bpmu?" \n' +
    '\n' +
    '"Ug lmiz Uz. Jmvvmb," zmxtqml pqa eqnm, "pwe kiv gwc jm aw bqzmawum! Gwc ucab svwe bpib Q iu bpqvsqvo wn pqa uizzgqvo wvm wn bpmu." \n' +
    '"Qa bpib pqa lmaqov qv ambbtqvo pmzm?" \n' +
    '"Lmaqov! Vwvamvam, pwe kiv gwc bits aw! Jcb qb qa dmzg tqsmtg bpib pm UIG nitt qv twdm eqbp wvm wn bpmu, ivl bpmzmnwzm gwc ucab dqaqb pqu ia awwv ia pm kwuma." \n' +
    '"Q amm vw wkkiaqwv nwz bpib. Gwc ivl bpm oqzta uig ow, wz gwc uig amvl bpmu jg bpmuamtdma, epqkp xmzpixa eqtt jm abqtt jmbbmz, nwz ia gwc izm ia pivlawum ia ivg wn bpmu, Uz. Jqvotmg uig tqsm gwc bpm jmab wn bpm xizbg." \n' +
    '\n' +
    '"Ug lmiz, gwc ntibbmz um. Q kmzbiqvtg PIDM pil ug apizm wn jmicbg, jcb Q lw vwb xzmbmvl bw jm ivgbpqvo mfbziwzlqvizg vwe. Epmv i ewuiv pia nqdm ozwev-cx licopbmza, apm wcopb bw oqdm wdmz bpqvsqvo wn pmz wev jmicbg." \n' +
    '\n' +
    '"Qv ackp kiama, i ewuiv pia vwb wnbmv uckp jmicbg bw bpqvs wn." \n' +
    '\n' +
    '"Jcb, ug lmiz, gwc ucab qvlmml ow ivl amm Uz. Jqvotmg epmv pm kwuma qvbw bpm vmqopjwczpwwl." \n' +
    '"Qb qa uwzm bpiv Q mvoiom nwz, Q iaaczm gwc." \n' +
    '\n' +
    '"Jcb kwvaqlmz gwcz licopbmza. Wvtg bpqvs epib iv mabijtqapumvb qb ewctl jm nwz wvm wn bpmu. Aqz Eqttqiu ivl Tilg Tckia izm lmbmzuqvml bw ow, umzmtg wv bpib ikkwcvb, nwz qv omvmzit, gwc svwe, bpmg dqaqb vw vmekwumza. Qvlmml gwc ucab ow, nwz qb eqtt jm quxwaaqjtm nwz CA bw dqaqb pqu qn gwc lw vwb." \n' +
    '\n' +
    '"Gwc izm wdmz-akzcxctwca, aczmtg. Q lizm aig Uz. Jqvotmg eqtt jm dmzg otil bw amm gwc; ivl Q eqtt amvl i nme tqvma jg gwc bw iaaczm pqu wn ug pmizbg kwvamvb bw pqa uizzgqvo epqkpmdmz pm kpwwama wn bpm oqzta; bpwcop Q ucab bpzwe qv i owwl ewzl nwz ug tqbbtm Tqhhg." \n' +
    '"Q lmaqzm gwc eqtt lw vw ackp bpqvo. Tqhhg qa vwb i jqb jmbbmz bpiv bpm wbpmza; ivl Q iu aczm apm qa vwb pitn aw pivlawum ia Rivm, vwz pitn aw owwl-pcuwczml ia Tglqi. Jcb gwc izm iteiga oqdqvo PMZ bpm xzmnmzmvkm." \n' +
    '\n' +
    '"Bpmg pidm vwvm wn bpmu uckp bw zmkwuumvl bpmu," zmxtqml pm; "bpmg izm itt aqttg ivl qovwzivb tqsm wbpmz oqzta; jcb Tqhhg pia awumbpqvo uwzm wn ycqksvmaa bpiv pmz aqabmza." \n' +
    '"Uz. Jmvvmb, pwe KIV gwc ijcam gwcz wev kpqtlzmv qv ackp i eig?'


let z = [

    //Kpixbmz
    //Chapter
    ['k', 'c'],
    ['p', 'h'],
    ['i', 'a'],
    ['x', 'p'],
    ['b', 't'],
    ['m', 'e'],
    ['z', 'r'],


    ['q', 'i'],
    ['e', 'w'],
    ['a', 's'],
    ['c', 'u'],
    ['v', 'n'],
    ['j', 'b'],
    ['w', 'o'],
    ['u', 'm'],

    //Pride And Prejudice
    //Prile anl Prerulice
    ['l', 'd'],

    //Jane Austen
    //Rane Austen
    ['r', 'j'],

    //Howeder
    //However
    ['d', 'v'],

    //neighbourhood
    //neiohbourhood
    ['o', 'g'],

    //gou
    //you
    ['g', 'y'],

    //chitdren
    //children
    ['t', 'l'],

    //acsnowledged
    //acknowledged
    ['s', 'k'],

    //nortune
    //fortune
    ['n', 'f'],



    ['y', 'q'],
    ['f', 'x'],
    ['h', 'z'],




    //freq analysis
/*    ['m', 'e'],
    ['w', 't'],
    ['b', 'a'],
    ['v', 'o'],
    ['q', 'n'],
    ['i', 'r'],
    ['a', 'i'],*/
];
let zMap = new Map(z);

console.log(
    en_text.split('').map(ch => {
        let e = ch.toLowerCase();
        if (zMap.has(e)) {
            if (isUpperCase(ch)) {
                return zMap.get(e).toUpperCase()
            } else {
                return zMap.get(e)
            }
        }
        return ch
    }).join('')
);

console.log(z.sort(([a], [b]) => a.charCodeAt(0) - b.charCodeAt(0)));
console.log(z.length);
console.log(new Set(z.map(e => e[0])).size);
console.log(new Set(z.map(e => e[1])).size);
