using Ang.Data;

namespace Ang.Data
{
    public interface IBookService
    {
        List<Book> GetAllBooks();

        Book GetBookById(int id);

        void UpdateBook(int id, Book newBook);

        void DeleteBook(int id);

        void AddBook(Book newBook);
    }
}
