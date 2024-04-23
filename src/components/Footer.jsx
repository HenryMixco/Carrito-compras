import { useFilters } from '../hooks/useFilters'
import './Footer.css'
import { useCart } from '../hooks/useCart';

export function Footer () {
    const { filters } = useFilters();
    const { cart } = useCart();

    return(

        <footer className="footer">
            <h4>
                <span>Henry Mixco</span>
            </h4>
            <h5>© HD Phones</h5>
        </footer>
    )
}