import * as React from 'react'
import * as MaterialModule from '../../common/Material';
import FormComponent from '../dumpComponent/ReactForm';

export default function LoginComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Login Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

            <FormComponent/>
        </>
    )
}