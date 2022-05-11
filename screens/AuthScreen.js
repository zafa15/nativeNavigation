import React, { useState, useReducer, useCallback } from 'react';
import { 
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS } from '../constants/color';
import { signup } from '../store/actions/auth.action';
import Input from '../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state,action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const inputValues = {
            ...state.inputValues,
            [action.input]:action.value,
        }

        const inputValidities = {
            ...state.inputValidities,
            [action.input]:action.value,
        }

        let formIsValid = true;

        for(const key in inputValidities){
            formIsValid = formIsValid && inputValidities[key];
        }

        return{
            formIsValid,
            inputValues,
            inputValidities
        }
    }

    return state;
};


const AuthScreen = () => {

    const [ pass, setPass ] = useState('');
    const [ mail, setMail ] = useState('');

    const title = 'REGISTRO',
    message = '¿Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'login';

    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email:'',
            password: '',
        },

        inputValidities:{
            email:false,
            password:false,
        },

        formIsValid:false,
    });
    
    const handleSignIn = () => {
        if(formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password));  
          } else {
              Alert.alert(
                  'Formulario invalido',
                  'Ingrese email y usuario valido',
                  [{text:'Ok'}]
              )
          }
    };

    const onInputChangeHandler = useCallback(        
        (inputIdentifier, inputValue, inputValidity) => {
           let valor = 0;
          formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
          });
        },
        [formDispatch]
      );

    /* const handlerPass = (text) => {
         setPass(text);
    }

    const handlerEmail = (text) => {
        setMail(text);
    } */

    return (
        <KeyboardAvoidingView
        behavior='height'
        style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>

                {/* <Text style={styles.label}>Email</Text>
                 <TextInput 
                    style={styles.input}
                    keyboarType="email-address"
                    autoCapitalize="none"
                    onChangeText={handlerEmail}/>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={handlerPass}/> */}

                <Input
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Por favor ingrese un email valido"
                    initialValue=""
                    onInputChange={onInputChangeHandler}
                />

                <Input
                    id="password"
                    label="Password"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize="none"
                    errorText="Por favor ingrese un password"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <View>
                    <Button style={styles.button} title='Registrarme'
                    onPress={handleSignIn}
                    />
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log(messageTarget)}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'JosefinSansBold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 20,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    prompt: {
        alignItems: 'center',
        marginTop: 30
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: 'JosefinSans',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'JosefinSansBold',
        color: COLORS.greenPastel
    },
    button: {
        backgroundColor: COLORS.redPastel,
        marginVertical: 20,
        padding: 12
    },
    label: {
        fontFamily: "JosefinSansBold",
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
});

export default AuthScreen;