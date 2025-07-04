import {Image, Text, View, ScrollView} from "react-native";
import "../../global.css"
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/searchBar";
import {useRouter} from "expo-router";
import useFetch from "@/services/fetching";
import {fetchMovies} from "@/services/api";


export default function Index() {
    const router = useRouter();

    const {data:movies} = useFetch(()=> fetchMovies(({query:""})))
    console.log(movies)
    return (
        <View className={"flex-1 bg-primary"}>
            <Image source={images.bg} className={"absolute w-full z-0"} resizeMode={"cover"}/>
            <ScrollView className={"flex-1 px-5"}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
            >
                <Image source={icons.logo} className={" w-12  h-10 mt-20 mb-5 mx-auto"}/>
                <View className={"flex-1 mt-5 "}>
                    <SearchBar onPress={() => router.push("/search")}
                               placeholder={"Search For Movies"}
                    />

                </View>
            </ScrollView>
        </View>
    );
}
