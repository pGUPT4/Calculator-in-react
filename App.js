/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

let getText = []
let setResult
let getTextString 

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            calculationText: getText,
            resultText: setResult
        }
    }

    validate(){
        if(this.state.calculationText[this.state.calculationText.length - 1] == '+'||
            this.state.calculationText[this.state.calculationText.length - 1] == '-'||
            this.state.calculationText[this.state.calculationText.length - 1] == '*'||
            this.state.calculationText[this.state.calculationText.length - 1] == '/'){
                return false
            }
        return true

    }
    
    buttonPressed(text){
        switch(text){
            case '=':

                if (this.validate() == true){
                    getTextString = getText.join('')
                    setResult = eval(getTextString)
                }

                this.setState({
                    resultText: setResult
                })
                break
            case 'AC':
                getText = []
                break
            case 'CE':
                getText.pop()
                break 
            case '+':
            case '-': 
            case '*':
            case '/':


                // check if we are not printing two operations continuously
                if(this.state.calculationText[this.state.calculationText.length - 1] == '+'||
                this.state.calculationText[this.state.calculationText.length - 1] == '-'||
                this.state.calculationText[this.state.calculationText.length - 1] == '*'||
                this.state.calculationText[this.state.calculationText.length - 1] == '/') return 

                // if calc text is empty then print no operators
                if(this.state.calculationText == "") return

                getText.push(text)
                break 
            default:
                getText.push(text)
                break
        }

        this.setState({
            calculationText: getText
        })

    }
    render(){
        let rows = []
        let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
        for(let i = 0; i < 4; i++){
            let row = []
            let k = 0
            for(let j = 0; j < 3; j++){ 
                row.push(
                    <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])}>
                        <Text key = {nums[i][j]} style = {styles.buttonText}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                )
            }
            rows.push(<View style = {styles.row} >{row}</View>)
        }

        let buttons = ['AC','CE', '+', '-', '*', '/']
        let operations = []
        for(let i = 0; i < 6; i++){
            operations.push(
                <TouchableOpacity onPress={() => this.buttonPressed(buttons[i])}>
                        <Text key = {buttons[i]}style = {styles.buttonText}>{buttons[i]}</Text>
                </TouchableOpacity>
            )
        }
        return(
            <View style = {styles.container}>
                <View style = {styles.calculation}>
                    <Text style = {styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                <View style = {styles.result}>
                    <Text style = {styles.resultText}>{this.state.resultText}</Text>
                </View>
                
                <View style = {styles.buttons}>

                    <View style = {styles.numbers}>
                        {rows}
                    </View>

                    <View style = {styles.operations}>
                        {operations}
                    </View>

                </View>
            </View>
        )


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText:{
    fontSize: 40,
    color: 'orange',
    
  },
  result: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText:{
    fontSize: 50,
    color: 'white',
  },
  calculation: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  calculationText:{
    fontSize: 34,
    color: 'white'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  buttons: {
    flex: 7, 
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  operations:{
    backgroundColor: 'black', 
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center' 
  }
});

