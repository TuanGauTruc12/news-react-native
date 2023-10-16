import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

class CustomScrollbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollHeight: 0,
      contentHeight: 0,
      scrollViewHeight: 0,
    };
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ contentHeight });
  };

  onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    this.setState({ scrollViewHeight: height });
  };

  onScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    const { scrollViewHeight, contentHeight } = this.state;

    // Tính toán chiều dài của thanh cuộn
    const scrollHeight = (scrollViewHeight / contentHeight) * scrollViewHeight;

    this.setState({ scrollHeight });
  };

  render() {
    const { scrollHeight } = this.state;

    return (
      <View className='bg-blue-200' style={{ flex: 1 }}>
        <ScrollView
          onContentSizeChange={this.onContentSizeChange}
          onLayout={this.onLayout}
          onScroll={this.onScroll}
          className='bg-red-200 h-3000'
        >
          {/* Nội dung của bạn ở đây */}
        </ScrollView >
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 1200,
            width: 24, // Thay đổi chiều rộng của thanh cuộn
            backgroundColor: 'gray', // Thay đổi màu sắc của thanh cuộn
            height: scrollHeight, // Thay đổi chiều cao của thanh cuộn
          }}
        />
      </View>
    );
  }
}

export default CustomScrollbar;
