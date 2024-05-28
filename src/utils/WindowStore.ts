import {create} from 'zustand'


interface WindowStore {
    resume: boolean
    toggleResume: () => void,
    clickerGame: boolean,
    toggleClickyGame: ()=>void
    cursorSelect: boolean,
    toggleCursorSelect: () => void
    backgroundSelect: boolean
    toggleBackgroundSelect: ()=>void
    cursor: string
    setCursor: (cursorClass: string)=> void
    background: string
    setBackground: (bgClass:string) => void
}

export const useWindowStore = create<WindowStore>((set,get) => ({
    resume: false,
    clickerGame: false,
    cursorSelect: false,
    backgroundSelect: false,
    toggleResume: () => set((state) => ({

        resume: !state?.resume ?? false
    })),
    toggleClickyGame: () =>{console.log(get().clickerGame); return set((state) => ({

        clickerGame: !state?.clickerGame ?? false
    }))},
    toggleCursorSelect: () => set((state) => ({

        cursorSelect: !state?.cursorSelect ?? false
    })),
    toggleBackgroundSelect: () => set((state) => ({

        backgroundSelect: !state?.backgroundSelect ?? false
    })),
    cursor: 'default',
    setCursor: (cursorClass)=>set((state)=>({
        cursor: cursorClass
    })),
    background: 'bg-beach-sunset',
    setBackground: (bgClass)=>set((state)=>({
        background: bgClass
    }))
}))