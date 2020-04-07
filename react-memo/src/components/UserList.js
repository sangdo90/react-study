import React, { useCallback } from 'react';
import { List } from 'react-virtualized';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
      <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {

    const rowRenderer = useCallback(({ index, key }) => {
        const user = users[index];
        return (
            <User
                user={user}
                key={user.id}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        )
    }, [onRemove, onToggle, users])

    return (
        // <div>
        //     {users.map(user => (
        //         <User
        //             user={user}
        //             key={user.id}
        //             onRemove={onRemove}
        //             onToggle={onToggle}
        //         />
        //     ))}
        // </div>
        <List
            width={471}
            height={1000}
            rowCount={users.length}
            rowHeight={21}
            rowRenderer={rowRenderer}
            list={users}
        />
    );
}

export default React.memo(UserList);
// export default UserList;