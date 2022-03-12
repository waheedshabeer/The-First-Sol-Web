export const skeleton = ({
    width = null,
    height = null,
    style = {},
    shape = 'rounded-full',
    className = null,
}) => {
    return (
        <div
            className={`bg-gray-extralight animate-pulse ${shape}${
                className ? ` ${className}` : ''
            }${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`}
            style={style}
        />
    )
}
