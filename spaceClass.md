```mermaid
classDiagram 
    class Rover Spacefraft{
        manufacturer String 
        model String
        program int
        Tech int
        clutch()
        pressure()
        ignite()

    }
    class Driver{
        name string
        credentials string
        title string
        onTravel boolean
        active boolean
        board rover()
        drive rover()
        makeActive()
    }
```