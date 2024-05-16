import * as React from 'react'
import * as MaterialModule from '../../common/Material'

function QuotesComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Quotes Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}

export default QuotesComponent