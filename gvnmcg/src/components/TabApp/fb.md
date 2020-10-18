purpose:


    Allow user to play with complex representatoin of guitar fretboard

    eat the rich with beautiful composition

    save configurations and return to them

    name configuations???
    list configuations???
    list configuations???


Architecture:

    App
        needs: bigstate

            key controls
                needs : key, omited(chords)
                can do: change key, omit  

            fretboard controls
                needs: tuning, omited strings
                can do: tune  

            fretboard display
                needs: bigstate
                can do: --

                GtrString Display
                    needs: string tuning, key state
                    can  : --

[refined]
Architecture:

==h==

    App
        needs: state

            key controls
                needs : scale
                can do: [change scale]
                style : [buttons], [input]

            fretboard controls
                needs: tuning
                can do: changeTuning , reset to standard
                style : [==h==]

            fretboard display
                needs: tuning
                can do: [display strings],[omit strings]
                style : [stings], [omit buttons]

                GtrString Display
                    needs: string tuning, key state
                    can  : --


<span style="color: #FFFF00">Marked text</span>
<mark>Marked text</mark>
