import React, { useEffect } from 'react'
import supabase from './supabase'
export default function database() {
        const getSmoothies = async () => {
            const {data,error} = await supabase
            .from('smoothies')
            .select()

            if(error){
            console.log(error)
            }
            if(data){
                return data
            }
        }
}
