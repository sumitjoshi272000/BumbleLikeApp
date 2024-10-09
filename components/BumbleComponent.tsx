import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';

interface DataInterface {
    id: number;
    name: string;
    image: string;
}

const data: DataInterface[] = [
    { id: 1, name: 'Georgia, 24', image: 'https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg' },
    { id: 2, name: 'Radha, 26', image: 'https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg' },
    { id: 3, name: 'Seeta, 27', image: 'https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Geeta, 25', image: 'https://watermark.lovepik.com/photo/20211203/large/lovepik-teenage-girl-checking-photos-on-mobile-phone-picture_501457617.jpg' },
    { id: 5, name: 'Meeta 25', image: 'https://img.freepik.com/premium-photo/beautiful-usa-girl-friendly-carefree-smile-looking-positive-relaxed-happy_564692-49201.jpg' },
    { id: 6, name: 'Reeta 30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP4WOFOQdcpJNyuScU0lfDoHDsWuw7tTR7A&s' },
    { id: 7, name: 'Champa 22', image: 'https://as2.ftcdn.net/v2/jpg/01/43/42/53/1000_F_143425380_UpzIAeidPkNsrpFuHNgrqjhhTBwPLmmf.jpg' },
    { id: 8, name: 'Vinita 23', image: 'https://thumbs.dreamstime.com/b/portrait-beautiful-fashion-model-blonde-girl-nature-makeup-hairstyle-against-background-green-birches-trees-322317240.jpg' },
    { id: 9, name: 'Sangeeta 27', image: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?cs=srgb&dl=pexels-dreamlensproduction-2913125.jpg&fm=jpg' },
    { id: 10, name: 'Sarita 28', image: 'https://pics.craiyon.com/2023-07-11/08bbfb575ce3487bae5bba65e8f0aa92.webp' },

];

const BumbleComponent: React.FC = () => {
    const [likeData, setLikeData] = useState<DataInterface[]>([]);
    const [dislikeData, setDislikeData] = useState<DataInterface[]>([]);

    const swipeRightFun = (index: number) => {
        setLikeData([...likeData, data[index]]);
    };

    const swipeLeftFun = (index: number) => {
        setDislikeData([...dislikeData, data[index]]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.hamberger} source={{ uri: "https://w7.pngwing.com/pngs/436/707/png-transparent-hamburger-button-computer-icons-menu-menu-food-text-rectangle.png" }} />
                <Text style={styles.logoText}>bumble</Text>
                <View style={styles.headerIcons}>
                    <Image style={styles.hamberger2} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s" }} />
                    <Image style={[styles.hamberger2, { marginLeft: 10 }]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfe9n1387magZlSXyYaLCjBXSfuCeqdyE0A&s" }} />
                </View>
            </View>

            <View style={{ height: "92%", }}>
                <Swiper
                    cards={data}
                    renderCard={(data) => (
                        <View style={styles.cardStyle}>
                            <Image source={{ uri: data.image }} style={styles.image} />
                            <View style={styles.bottomOverlay}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>New here</Text>
                                </View>
                                <Text style={styles.name}>{data.name}</Text>
                            </View>
                        </View>
                    )}
                    onSwipedRight={(index) => swipeRightFun(index)}
                    onSwipedLeft={(index) => swipeLeftFun(index)}
                    stackSize={3}
                    backgroundColor={'#fff'}
                    containerStyle={{ height: "100%" }}
                    cardStyle={{ height: "100%", marginTop: -50, borderRadius: 10 }}
                    cardIndex={0}
                    stackSeparation={0}
                    animateCardOpacity
                    overlayLabels={{
                        left: {
                            title: 'Dislike',
                            style: {
                                label: {
                                    backgroundColor: 'red',
                                    color: 'white',
                                    fontSize: 24,
                                    padding: 10,
                                    position: 'absolute',
                                    right: "20%",
                                    top: "50%"
                                },
                            },
                        },
                        right: {
                            title: 'Like',
                            style: {
                                label: {
                                    backgroundColor: 'green',
                                    color: 'white',
                                    fontSize: 24,
                                    padding: 10,
                                    position: 'absolute',
                                    left: "20%",
                                    top: "50%"
                                },
                            },
                        },
                    }}
                    infinite
                    verticalSwipe={false}
                />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: "5%",
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffcc00',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 24,
        marginLeft: 20,
        color: '#fff',
    },
    hamIcon: {
        fontSize: 24,
        color: '#fff',
    },
    cardStyle: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    bottomOverlay: {
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0
    },
    badge: {
        backgroundColor: '#ffcc00',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        alignItems: 'center',
        width: 90
    },
    badgeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 4
    },
    hamberger: {
        height: 20,
        width: 24,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    hamberger2: {
        height: 28,
        width: 28,
        backgroundColor: 'white',
        overflow: 'hidden'
    }
});

export default BumbleComponent;