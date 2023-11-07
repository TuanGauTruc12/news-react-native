import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Button} from 'react-native';
import CustomCommentItem from './CustomCommentItem';
import {Comment} from '../objects/Comment';
import data from '../objects/data.json';
import {Comments} from '../objects/Comments';
import {User} from '../objects/User';

export default function CustomCommentList() {
  const [comments, setComments] = useState<Comments[]>([]);
  const [idComment, setIdComment] = useState<number[]>([]);

  useEffect(() => {
    const arrayComment: Comments[] = [];
    data.forEach(item => {
      item.forEach(value => {
        const id = value.id;
        const commentArray = value.comments.map(
          (c, index) =>
            new Comment(
              c.content,
              c.countComment,
              c.countLike,
              c.createAt,
              new User(c.idUser, c.displayName, c.avatar),
            ),
        );
        const commentsArray = new Comments(commentArray, id);
        arrayComment.push(commentsArray);
      });
    });
    setComments(arrayComment);
  }, []);

  return (
    <ScrollView>
      {comments.map(comment => {
        if (comment.comments.length > 2) {
          return (
            <View key={comment.idComment} className="flex-col mt-2">
              {idComment.length !== 0 &&
              idComment.find((item: number) => item === comment.idComment) ? (
                <>
                  {comment.comments
                    .slice(0, comment.comments.length)
                    .map((c, index) => {
                      if (index === 0) {
                        return (
                          <CustomCommentItem
                            key={index}
                            contentComment={c.content}
                            countComment={c.countComment}
                            countLiked={c.countLike}
                            createAt={c.timeComment}
                            user={c.user}
                          />
                        );
                      } else {
                        return (
                          <View className="ml-8" key={index}>
                            <CustomCommentItem
                              contentComment={c.content}
                              countComment={c.countComment}
                              countLiked={c.countLike}
                              createAt={c.timeComment}
                              user={c.user}
                            />
                          </View>
                        );
                      }
                    })}
                </>
              ) : (
                <>
                  {comment.comments.slice(0, 2).map((c, index) => {
                    if (index === 0) {
                      return (
                        <CustomCommentItem
                          key={index}
                          contentComment={c.content}
                          countComment={c.countComment}
                          countLiked={c.countLike}
                          createAt={c.timeComment}
                          user={c.user}
                        />
                      );
                    } else {
                      return (
                        <View className="ml-8" key={index}>
                          <CustomCommentItem
                            contentComment={c.content}
                            countComment={c.countComment}
                            countLiked={c.countLike}
                            createAt={c.timeComment}
                            user={c.user}
                          />
                        </View>
                      );
                    }
                  })}
                </>
              )}

              {idComment.length !== 0 &&
              idComment.find((item: number) => item === comment.idComment) ? (
                <View className="ml-10 w-full flex-row">
                  <TouchableOpacity
                    className="bg-[#00bfff] py-2 px-1"
                    onPress={() => {
                      setIdComment(prev =>
                        prev.filter(item => item !== comment.idComment),
                      );
                    }}>
                    <Text className="text-base font-semibold">Hide less</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View className="w-full ml-10 flex flex-row">
                  <TouchableOpacity
                    className="bg-[#00bfff] py-2 px-1"
                    onPress={() => {
                      setIdComment((prev: number[]) => [
                        ...prev,
                        comment.idComment,
                      ]);
                    }}>
                    <Text className="text-base font-semibold">{`Show more (${
                      comment.comments.length - 2
                    })`}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        } else {
          return comment.comments.map((c, index) => (
            <CustomCommentItem
              key={index}
              user={c.user}
              contentComment={c.content}
              countComment={c.countComment}
              countLiked={c.countLike}
              createAt={c.timeComment}
            />
          ));
        }
      })}
    </ScrollView>
  );
}
