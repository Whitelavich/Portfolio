import {create} from 'zustand'


interface WindowStore {
    resume: boolean
    toggleResume: () => void,
    clickerGame: boolean,
    toggleClickyGame: ()=>void
}

export const useWindowStore = create<WindowStore>((set,get) => ({
    resume: false,
    clickerGame: false,
    toggleResume: () => set((state) => ({

        resume: !state?.resume ?? false
    })),
    toggleClickyGame: () =>{console.log(get().clickerGame); return set((state) => ({

        clickerGame: !state?.clickerGame ?? false
    }))},
}))