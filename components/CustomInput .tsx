import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {icons} from '../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {useNewsContext} from './NewsContext';

interface ICustomInputProps {
  title?: string;
  required?: boolean;
  placeholder?: string;
  isError?: boolean;
  messageError?: string;
  isPassword?: boolean;
  isSearch?: boolean;
  icon?: IconDefinition;
  showPassword?: boolean;
  input: string;
  setInput: (value: string) => void;
  setShowPassword?: (value: boolean) => void | undefined;
  setMessageError?: (value: string) => void | undefined;
  handleSubmitMessage?: (value: string) => void | undefined;
  isComment?: boolean;
  handleInputBlur?: () => void;
  handleInputFocus?: () => void;
}

export default function CustomInput({
  setMessageError,
  placeholder,
  setInput,
  setShowPassword,
  required,
  isError,
  isPassword,
  isSearch,
  input,
  title,
  showPassword,
  messageError,
  isComment,
  handleSubmitMessage,
  handleInputFocus,
  handleInputBlur,
}: ICustomInputProps) {
  const {
    faAsterisk,
    faXmark,
    faEye,
    faEyeSlash,
    faMagnifyingGlass,
    faPaperPlane,
  } = icons;
  const [isClear, setIsClear] = useState<boolean>(true);
  const [classNameInput, setClassNameInput] = useState<string>('');
  const {inputRef} = useNewsContext();
  const handleClearInput = useCallback(() => {
    setInput('');
  }, []);

  useEffect(() => {
    setIsClear(input.length > 0);
  }, [input]);

  useEffect(() => {
    if ((isError || isClear) && isPassword) {
      setClassNameInput('w-[80%]');
    } else if (isError || isClear || isPassword) {
      setClassNameInput('w-[90%]');
    } else {
      setClassNameInput('w-full');
    }
  }, [isClear, isError, isPassword]);

  return isSearch ? (
    <View className="w-full relative py-3 justify-center bottom-1">
      <View className="absolute translate-y-4 h-full ml-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} size={25} />
      </View>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`focus:border-blue-500 h-full border pl-12 pr-14 rounded-md`}
        placeholder={placeholder}
        value={input}
        onChangeText={e => {
          setInput(e);
          setMessageError?.('');
        }}
      />

      <View
        className={`absolute right-0 h-full justify-center transition-all ease-in-out duration-1000 px-4 ${
          isClear ? 'flex' : 'hidden'
        }`}>
        <TouchableOpacity onPress={handleClearInput}>
          <FontAwesomeIcon icon={faXmark} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  ) : isComment ? (
    <View className="w-full relative p-4 justify-center bg-white border-2 border-gray-200 flex-none">
      <View className={`w-full border-2 border-primary-color`}>
        <TextInput
          ref={inputRef}
          className={`${isClear ? 'w-[80%]' : 'w-[90%]'} h-10 pl-3`}
          placeholder={placeholder} //"Type your comment....."
          value={input}
          onChangeText={e => {
            setInput(e);
            setMessageError?.('');
          }}
        />

        {isComment && (
          <TouchableOpacity
            onPress={() => {
              handleSubmitMessage?.(input);
            }}
            className="absolute right-0 mr-2 h-full justify-center blue-400">
            <FontAwesomeIcon color="#60a5fa" icon={faPaperPlane} size={25} />
          </TouchableOpacity>
        )}
        {isClear && (
          <TouchableOpacity
            onPress={handleClearInput}
            className={`absolute mr-2 justify-center h-full ${
              isClear ? 'right-[10%]' : 'right-0'
            }`}>
            <FontAwesomeIcon icon={faXmark} size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  ) : (
    <View className="flex flex-col w-full px-4 justify-center relative">
      {required && (
        <View className="flex-row items-center">
          <Text className="w-fit">{title}</Text>
          <View className="ml-1">
            <FontAwesomeIcon size={8} color="red" icon={faAsterisk} />
          </View>
        </View>
      )}

      <View
        className={`w-full mt-1 border-blue-500 border ${
          isError && 'border-red-500'
        }`}>
        <TextInput
          secureTextEntry={isPassword && showPassword}
          value={input}
          className={classNameInput}
          onChangeText={e => {
            setMessageError?.('');
            setInput(e);
          }}
          placeholder={placeholder} //{`Nhập ${title?.toLocaleLowerCase()}`}
        />

        {(isError || isClear) && (
          <TouchableOpacity
            onPress={handleClearInput}
            className="absolute right-0 mr-2 h-full justify-center">
            <FontAwesomeIcon icon={faXmark} size={25} />
          </TouchableOpacity>
        )}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword?.(!showPassword)}
            className={`absolute mr-2 justify-center h-full ${
              isError || isClear ? 'right-[10%]' : 'right-0'
            }`}>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>
      <View className="mt-1">
        {isError && <Text className="text-red-600">{messageError}</Text>}
      </View>
    </View>
  );
}
