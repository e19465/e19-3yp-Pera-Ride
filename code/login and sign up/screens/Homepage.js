import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import {Camera} from 'react-native-heroicons/outline'


export default function Homepage() {
    const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

        

{/*     
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                source={require('../assets/images/bicycle2.png')} 
                className="h-[200] w-[250]" 
            />

        </View> */}

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-70 pb-20">
            
            {/* title */}
              
            <View className="flex items-center">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className="text-blue font-bold tracking-wider text-3xl">
                         Welcome to Pera Ride...
                </Animated.Text>   
            </View>  
           {/* < TouchableOpacity>
                <Camera/>
           </TouchableOpacity>        */}
                  
            

            {/* <View className="flex flex-row items-center">
                 <i class="fa-solid fa-house"></i> 
                 </View> */}

             {/* form */}
            <View className="flex items-center mx-5 space-y-4">
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full">

                    <TextInput
                        placeholder="User Name"
                        placeholderTextColor={'gray'}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(200).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        secureTextEntry
                    />
                </Animated.View>

                <Animated.View 
                    className="w-full" 
                    entering={FadeInDown.delay(400).duration(1000).springify()}>

                    <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">

                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.push('Login')}>
                        <Text className="text-sky-600">SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}