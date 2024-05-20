import * as React from 'react'
import * as MaterialModule from '../../common/Material';
import * as _ from 'lodash'
import { globalStore } from '../../App';

export default function FormComponent(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const getGlobalData = React.useContext(globalStore);
    console.log("get store data",getGlobalData)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = () => {

    }
    const handleFormField = (value, key) => {
        [key] = value
    }
    const formField = (field) => {
        return (
            <form onSubmit={handleSubmit}>
                {
                    _.map(field, (item, keyName) => (
                        <div className='' key={keyName}>
                            {
                                item.type === 'text' && (
                                    <MaterialModule.TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                        value={item.fieldName || ""}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                    />
                                )
                            }
                            {
                                item.type === 'password' && (
                                    <MaterialModule.FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                        <MaterialModule.InputLabel htmlFor="outlined-adornment-password">Password</MaterialModule.InputLabel>
                                        <MaterialModule.OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                            value={item.fieldName || ""}
                                            placeholder={item.placeholder}
                                            endAdornment={
                                                <MaterialModule.InputAdornment position="end">
                                                    <MaterialModule.IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <MaterialModule.VisibilityOff /> : <MaterialModule.Visibility />}
                                                    </MaterialModule.IconButton>
                                                </MaterialModule.InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </MaterialModule.FormControl>
                                )
                            }
                            {
                                item.type === 'email' && (
                                    <MaterialModule.TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                        value={item.fieldName || ""}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                    />
                                )
                            }
                            {
                                item.type === 'select' && (
                                    <MaterialModule.TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                        value={item.fieldName || ""}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                    />
                                )
                            }
                            {
                                item.type === 'date' && (
                                    <MaterialModule.TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                        value={item.fieldName || ""}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                    />
                                )
                            }
                            {
                                item.type === 'radio' && (
                                    <MaterialModule.TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        onChange={(e) => handleFormField(e.target.value, item.fieldName)}
                                        value={item.fieldName || ""}
                                        placeholder={item.placeholder}
                                        type={item.type}
                                    />
                                )
                            }
                        </div>
                    ))
                }
            </form>
        )

    }
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Login Component
                </MaterialModule.Typography>

                {/* <div>
                    {formField()}
                </div> */}
            </MaterialModule.Box>
        </>
    )
}