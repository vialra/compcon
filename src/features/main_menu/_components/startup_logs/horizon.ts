import _ from 'lodash'

const logos = [
    `
   @@@@@   /@@@@    .@@@@@@@@     @@@@@@@@@@,    @@@@,  @@@@@@@@@@@#   @@@@@@@@*    @@@*      @*   
   @@@@@   /@@@@   @@@@   .@@@@   @@@@.   @@@@   @@@@,        @@@@@  &@@@,   @@@@   @@@@#     @*   
   @@@@@   /@@@@  #@@@@    @@@@/  @@@@.   @@@@(  @@@@,       @@@@@  .@@@@    @@@@&  @@@@@@    @*   
   @@@@@   /@@@@  @@@@@    @@@@@  @@@@.  ,@@@@   @@@@,      @@@@@   &@@@@    &@@@@  @%@@@@@   @*   
@@@     %%%*    @@     @@@@     @@         (@@@@@    %@@@@(    ,@@@@     @@@@,    @@ ,@     @@ (@@@
@@@     @@@/    @@     @@@@     @@    %@@    &@@@    %@@@(    .@@@@@.    @@@@     @@ ,@@     @ (@@@
@@@     @@@/    @@,    @@@@    *@@    %@@,    @@@    %@@&     @@@@@@#    @@@@     @@ ,@@@      (@@@
@@@     @@@/    @@@    @@@@    @@@    %@@*    @@@    %@@     @@@@@@@@    %@@@    @@@ ,@@@@     (@@@
@@@     @@@/    @@@@.   &%   .@@@@    %@@&    #@@    %@            @@@/   #@    @@@@ ,@@@@@.   (@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 /+---------------------------------------------------+\\
|		 Comin' at ya live from Tharsis Civica!		    |
 \\+---------------------------------------------------+/
 `,
]

const phrases = [
'Freedom of speech bill signed on Europa 5',
'Local governor abdicates, more at 12',
'Rally for NHP rights turn violent as "peace keepers" attack',
'New discovery made in the study of the omninet, more at 10',
'New machine simulates what its like to be cycled, will be unveiled to the public soon',
'New type of NHP rumored to have been found in an asteroid field, more at 14',
'Packages containing Greywash mailed to Union offices on Cradle, is HORUS getting bolder?',
'Lancers arrive in the Long Rim, about time',
'A shakeup of Martian politics is on the horizon with the death of conservatist politician',
'UIB agents are prime suspects in dissapearance of Pro-NHP speaker',
'UOB once again silence Horizon messages, more at 12',
'Has UEB gone too far? Manna fluctiations in the Long Rim could spell disaster, more at 14',
'New kids show about the FFT airs on the omninet to critical acclaim',
'New documentary about the horrors of SecComm to release soon',
]

const returnLogo = (): string => {
  return logos[0]
}

const getPhrase = (): string => {
  return _.sample(phrases)
}

const plog = typer => {
  typer
    .type('<br>')
    .type('<br>')
    .type('<br>')
    .type('<br>')
    .type('BOOTING UP RADIO SYSTEM')
    .break()
    .type('CHECKING FOR REACHABLE RELAY')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type('CHECKING FOR DIRECT OMNINET TUNNELS')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type('ESTABLISHING OMETEOL CLEARANCE')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type(`&emsp;&emsp;BROADCASTING ON (<b>${Math.floor(Math.random() * 99999)}</b> CHANNELS), (<b>${Math.floor(Math.random() * 999)}</b> STATIONS), (<b>${Math.floor(Math.random() * 999)}</b> PLANETS) LIVE`)
    .break()
    .type('INITIALIZING NEWSFEED')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('. ')
    .pause(150)
    .type('done')
    .break()
    .type(`<pre>${returnLogo()}</pre>`)
    .break()
    .type('------------------------------------------------------------')
	.break()
	.type('Stand for the Pillars')
	.break()
	.type('Fight the Posthuman Prohibitions')
	.break()
	.type('Live for the Horizon')
	.break()
	.type('------------------------------------------------------------')
    .break()
    .type('&emsp;&emsp;++News++')
    .break()
    .type(`&emsp;&emsp;>>${getPhrase()}`)
    .break()
    .type('&emsp;&emsp;++Nearest rally++')
    .break()
    .type(`&emsp;&emsp;<b>${Math.floor(Math.random() * 99)}</b> Planet(s) away`)
    .break()
    .type(`&emsp;&emsp;++How long until next vote++`)
    .break()
    .type(`&emsp;&emsp;<b>${Math.floor(Math.random() * 99)}</b> Month(s)`)
    .break()
    .type('------------------------------------------------------------')
    .break()
    .type(
      '>//[<span class="accent--text">HORIZON</span>: <span class="stark-text--text">Where to?.</span>]'
    )
    .go()
}

export default plog