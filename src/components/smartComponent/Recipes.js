import * as React from 'react'
import * as MaterialModule from '../../common/Material'
function RecipesComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Recipes Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default RecipesComponent