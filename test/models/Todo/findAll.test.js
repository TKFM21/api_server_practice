const assert = require('power-assert');
const Todo = require('../../../models/Todo');

describe('findAllメソッドのテスト', () => {
    it('findAllメソッドの存在確認', () => {
        assert.equal(typeof Todo.findAll, 'function');
    });

    it('配列の決められたデータ構造でTodoが格納されているか', () => {
        const todos = Todo.findAll();
        assert.equal(Array.isArray(todos), true);
        assert.equal(todos.length > 0, true);

        todos.forEach(todo => {
            assert.deepStrictEqual({ ...todo }, {
                id: todo.id,
                title: todo.title,
                body: todo.body,
                createdAt: todo.createdAt,
                updatedAt: todo.updatedAt
            });
        });
    });
});