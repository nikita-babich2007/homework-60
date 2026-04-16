import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Заголовок є обов\'язковим'],
    trim: true,
    index: true
  },
  content: {
    type: String,
    required: [true, 'Текст не може бути порожнім'],
    minlength: [10, 'Текст має містити мінімум 10 символів']
  },
  author: {
    type: String,
    default: 'Анонімний користувач'
  }
}, { 
  timestamps: true
});

const Article = mongoose.model('Article', articleSchema);

export default Article;