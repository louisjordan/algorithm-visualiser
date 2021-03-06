import styled from 'styled-components';
import { Link } from 'app/router';

type MenuContainerProps = {
    open: boolean;
};
export const MenuContainer = styled.div`
    position: fixed;
    z-index: 10;
    height: 100%;
    transform: translateX(
        ${(props: MenuContainerProps) => (props.open ? '0' : '-100%')}
    );
    transition: all 300ms ease-in-out;
    background: #1f1f1f;
    min-width: 10em;
`;

type MenuToggleProps = {};
export const MenuToggle = styled.div`
    position: absolute;
    right: -3em;
    top: 1em;
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;

    svg {
        width: 5em;
    }
`

export const MenuFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    width: 100%;
    position: fixed;
    bottom: 0;

    svg {
        fill: #303030;
        width: 2em;
        transition: all 300ms ease-in-out;

        &:hover {
            fill: #474747;
        }
    }
`

type MenuGroupListProps = {};
export const MenuGroupList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

type MenuGroupProps = {};
export const MenuGroup = styled.li``;

type MenuGroupTitle = {};
export const MenuGroupTitle = styled.span`
    padding: 0.6em 2em 0.6em 1em;
    background: #1f1f1f;
    display: block;
    color: #bfbfbf; 
`;

type MenuItemListProps = {};
export const MenuItemList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

type MenuItem = {};
export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
    background: #333;
    padding: 0.6em 2em 0.6em 1em;
    color: #bfbfbf;
    text-decoration: none;
    display: block;
    transition: 166ms ease-in-out;

    &:link {
        color: #bfbfbf;
    }

    &:visited {
        color: #bfbfbf;
    }

    &:hover {
        background: #2e2e2e;
    }

    &:active {
        background: #222;
    }
`;
