import { Button } from "~/shared/ui/button/button"
import { ReactComponent as VectorCart } from '~/assets/icons/cart.svg';
import { ReactComponent as VectorHeart } from '~/assets/icons/heart.svg';
import { ReactComponent as VectorUser } from '~/assets/icons/user.svg';
import { ReactComponent as VectorSearch } from '~/assets/icons/search.svg';
import { InputField } from "~/shared/ui/inputField/inputField";

export const Navbar = () => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '104px' }}>
            <div>
                <h1 style={{ fontSize: '40px' }}>BOOKSTORE</h1>
            </div>
            <div style={{ width: '50%', position: 'relative' }}>
                <InputField placeholder="Search" type="search" required shouldFitContainer />
                <Button
                    style={{ position: 'absolute', right: '5%', top: 'calc(50% - 12px)', blockSize: 'fit-content' }}
                    apperance="panel"
                    icon={<VectorSearch />}
                />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button
                    apperance="panel"
                    icon={<VectorHeart />}
                />
                <Button
                    apperance="panel"
                    icon={<VectorCart />}
                />
                <Button
                    apperance="panel"
                    icon={<VectorUser />}
                />
            </div>
        </div>
    )
}