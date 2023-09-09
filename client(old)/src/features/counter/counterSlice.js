// DUCKS pattern
// createSlice is a function to create a 'slice' of our total redux state
// PayloadAction is a typescript type representing the contents of one action
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: 1
}