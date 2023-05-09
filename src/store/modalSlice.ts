import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  modalShow: boolean
  modalType: 'connect' | 'tickets' | 'idoParticipate' | 'subscribe' | 'buyZlw'
}

interface SetupModalType {
  modalType: ModalState['modalType']
}

const initialState = { modalShow: false, modalType: 'connect' } as ModalState

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShow(state: ModalState) {
      state.modalShow = !state.modalShow
    },
    setModalType(state: ModalState, action: PayloadAction<SetupModalType>) {
      state.modalType = action.payload.modalType
    }
  }
})

export const { setShow, setModalType } = modalSlice.actions
export const modalReducer = modalSlice.reducer
