import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';

export default class Circle extends Component {
  constructor(...props) {
    super();
    this.animated = new Animated.Value(0);
    this.numCircles = 7;
    this.circles = [];
    this.height = props[0]?.height;
    this.width = props[0]?.width;
    this.translateX = props[0].translateX;

    for (let i = 0; i < this.numCircles; i++) {
      const inputRange = [0, 1];
      const outputRange = [
        `${i * (360 / this.numCircles)}deg`,
        `${i * (360 / this.numCircles) + 360}deg`,
      ];

      this.circles.push({
        animated: this.animated.interpolate({inputRange, outputRange}),
        style: {
          transform: [
            {rotate: this.animated.interpolate({inputRange, outputRange})},
            {translateX: this.translateX || 60},
          ],
        },
      });
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.loop(
      Animated.timing(this.animated, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.circles.map((circle, index) => (
          <Animated.View
            className="bg-primary-color"
            key={index}
            style={[
              styles.dot,
              circle.style,
              this.height &&
              this.width && {height: this.height, width: this.width},
            ]}></Animated.View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
