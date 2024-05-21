import * as React from 'react';
import * as MaterialModule from '../../common/Material';
import { getColorForLetter, getSingleCharacters } from '../../service';
import * as _ from 'lodash'

export default function CardComponent(props) {
    const { cardItem } = props;
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
    const imageChanger = (currentIndex) => {
        setCurrentImageIndex(currentIndex)
    }

    return (
        <MaterialModule.Card sx={{ maxWidth: 345 }} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <MaterialModule.CardHeader
                avatar={
                    <MaterialModule.Avatar aria-label="recipe" sx={{ bgcolor: getColorForLetter(cardItem.brand) }}>
                        {getSingleCharacters(cardItem.brand)}
                    </MaterialModule.Avatar>
                }
                title={cardItem.brand}
                subheader={cardItem.title}
            />
            <MaterialModule.CardMedia
                component="img"
                height="174px"
                width="auto"
                style={{objectFit:'contain'}}
                image={cardItem.images[currentImageIndex]}
                alt={cardItem.brand}
            />
            {cardItem.images?.length > 0 && (
                <div>
                    {
                        _.map(cardItem.images, (value, index) => (
                            <span
                                key={index}
                                onClick={() => imageChanger(index)}
                                style={{ borderRadius: '50%', width: '10px', height: '10px', display: 'inline-block', cursor: 'pointer', background: '#889ac3', margin: "0px 3px" }}
                            >
                            </span>
                        ))
                    }
                </div>
            )}

            <div className='row justify-content-between'>
                <span style={{ margin: '10px' }}>
                    {cardItem.price + ' $'}
                </span>

                <span style={{ margin: '10px' }}>
                    <MaterialModule.Rating
                        name="simple-controlled"
                        value={cardItem.rating}
                    />
                </span>

                <span style={{ margin: '10px' }}>
                    <MaterialModule.Badge badgeContent={cardItem.stock} color='warning'>
                    <MaterialModule.ShoppingCartIcon style={{color:'#797a64'}}/>
                    </MaterialModule.Badge>
                </span>
            </div>

            <MaterialModule.CardContent>
                <MaterialModule.Typography variant="body2" color="text.secondary">
                    {cardItem.description}
                </MaterialModule.Typography>
            </MaterialModule.CardContent>
        </MaterialModule.Card>
    );
}