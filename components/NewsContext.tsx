import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
  useRef
} from 'react';
import {TextInput} from 'react-native';
import {User} from '../objects/User';
import { Category } from '../objects/Category';

type NewsContextType = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  inputRef: React.RefObject<TextInput>;
  reply: number | undefined;
  setReply: Dispatch<SetStateAction<number| undefined>>;
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNewsContext = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNewsContext must be used within a News Provider');
  }

  return context;
};

interface NewsProviderProps {
  children: React.ReactNode;
}

const NewsProvider: React.FC<NewsProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | undefined>();
  const [reply, setReply] = useState<number | undefined>();
  const inputRef = useRef<TextInput>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const contextValue: NewsContextType = {
    user,
    setUser, 
    inputRef,
    reply,
    setReply,
    categories, setCategories
  };
  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
