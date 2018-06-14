import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataTranslationService } from './shared/services/language/data-translation.service';
import { MockDataTranslationService } from './shared/services/language/data-translation.testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: DataTranslationService, useClass: MockDataTranslationService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should change loaging flag on navigation interception', fakeAsync(() => {
        let eventNavigationStart = new NavigationStart(1, 'testUrl');
        let eventNavigationEnd = new NavigationEnd(2, 'testUrl2', 'testUrl3');
        let eventNavigationCancel = new NavigationCancel(3, 'testUrl4', 'test');
        let eventNavigationError = new NavigationError(5, 'testUrl5', undefined);
        
        component.loading = false;
        expect(component.loading).toBeFalsy();
        component.navigationInterceptor(eventNavigationStart);
        expect(component.loading).toBeTruthy();
        
        component.loading = true;
        expect(component.loading).toBeTruthy();
        component.navigationInterceptor(eventNavigationCancel);
        expect(component.loading).toBeFalsy();
        
        component.loading = true;
        expect(component.loading).toBeTruthy();
        component.navigationInterceptor(eventNavigationError);
        expect(component.loading).toBeFalsy();
        
        component.loading = true;
        expect(component.loading).toBeTruthy();
        component.navigationInterceptor(eventNavigationEnd);
        tick(1000);
        expect(component.loading).toBeFalsy();
    }));
});
