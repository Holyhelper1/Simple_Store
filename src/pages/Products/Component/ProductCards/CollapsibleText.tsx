import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

interface CollapsibleTextProps {
    description: string;
}

export const CollapsibleText: React.FC<CollapsibleTextProps> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <Box
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                maxHeight: isExpanded ? '300px' : '30px', 
                transition: 'max-height 1.2s ease-in-out',
            }}
        >
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    display: isExpanded ? 'block' : '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: isExpanded ? 'auto' : 'hidden',
                }}
            >
                {description}
            </Typography>
            {!isExpanded && <span style={{ color: 'primary.main' }}></span>}
            {isExpanded && <span style={{ color: 'primary.main' }}></span>}
        </Box>
    );
};
