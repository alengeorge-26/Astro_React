export const Navbar = () => 
{
    const num = 5; 
    const name = "John";

    return (
        <>
            <div>Navbar</div>
            <ul>
                <li style={{cursor: 'pointer'} }>
                    <a href="/about">About</a>
                </li>
                <li style={{cursor: 'pointer'} }>
                    <a href={`/${num}`}>ID {num}</a>
                </li>
                <li style={{cursor: 'pointer'} }>
                    <a href={`/${name}`}>Name {name}</a>
                </li>
            </ul>
        </>
    )
}
